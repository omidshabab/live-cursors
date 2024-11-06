"use client"

import React, { useEffect, useState } from 'react';
import { socket } from '../lib/socket';
import { CursorPosition, Client } from '../types';
import Cursor from './Cursor';

const CursorsCanvas: React.FC = () => {
     const [clients, setClients] = useState<Client[]>([]);
     const [localPosition, setLocalPosition] = useState<CursorPosition>({
          x: 0,
          y: 0,
          clientId: socket.id ?? ''
     });

     useEffect(() => {
          const handleConnect = () => {
               setLocalPosition(prev => ({ ...prev, clientId: socket.id ?? '' }));
          };

          const handleClients = (updatedClients: Client[]) => {
               setClients(updatedClients);
          };

          const handleCursorUpdate = (position: CursorPosition) => {
               setClients(prev => prev.map(client =>
                    client.id === position.clientId
                         ? { ...client, position }
                         : client
               ));
          };

          const handleClientDisconnected = (clientId: string) => {
               setClients(prev => prev.filter(client => client.id !== clientId));
          };

          if (!socket.connected) {
               socket.connect();
          }

          socket.on('connect', handleConnect);
          socket.on('clients', handleClients);
          socket.on('cursorUpdate', handleCursorUpdate);
          socket.on('clientDisconnected', handleClientDisconnected);

          return () => {
               socket.off('connect', handleConnect);
               socket.off('clients', handleClients);
               socket.off('cursorUpdate', handleCursorUpdate);
               socket.off('clientDisconnected', handleClientDisconnected);
               socket.disconnect();
          };
     }, []);

     useEffect(() => {
          const handleMouseMove = (e: MouseEvent) => {
               const position = {
                    x: e.clientX,
                    y: e.clientY,
                    clientId: socket.id || '',
               };
               setLocalPosition(position);
               socket.emit('cursorMove', position);
          };

          window.addEventListener('mousemove', handleMouseMove);
          return () => window.removeEventListener('mousemove', handleMouseMove);
     }, []);

     return (
          <div
               style={{
                    width: '100vw',
                    height: '100vh',
                    position: 'relative',
                    backgroundColor: '#f0f0f0',
                    cursor: 'none', // Hide the default cursor
               }}
          >
               {/* Local cursor */}
               <Cursor position={localPosition} isLocal={true} />

               {/* Remote cursors */}
               {clients
                    .filter(client => client.id !== socket.id)
                    .map(client => (
                         <Cursor
                              key={client.id}
                              position={client.position}
                         />
                    ))}

               {/* Debug info */}
               <div
                    style={{
                         position: 'fixed',
                         bottom: 10,
                         left: 10,
                         fontSize: 12,
                         cursor: 'default', // Restore default cursor for debug info
                    }}
               >
                    Connected users: {clients.length + 1}
                    <br />
                    Your ID: {socket.id}
               </div>
          </div>
     );
};

export default CursorsCanvas;