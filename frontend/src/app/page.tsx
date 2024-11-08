"use client"

import ModalProvider from "@/components/providers/ModalProvider";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from 'react';
import { socket } from '../lib/socket';
import { CursorPosition, Client, CursorType } from '../types';
import Cursor from '@/components/Cursor';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import IconButton from '@/components/IconButton';
import { LogInIcon } from 'lucide-react';
import { useModal } from '@/hooks/use-modal-store';

const Page = () => {
  const searchParams = useSearchParams()
  const username = searchParams.get("username") as string ?? null

  const [cursorType, setCursorType] = useState<CursorType>("default")

  const [clients, setClients] = useState<Client[]>([]);
  const [localPosition, setLocalPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
    clientId: socket.id ?? ''
  });

  const { onModalOpen } = useModal()

  const tGeneral = useTranslations("general")

  const people = [
    {
      id: 1,
      name: tGeneral("lorem").slice(150),
      designation: tGeneral("lorem").slice(150),
      image: "https://avatars.githubusercontent.com/u/100057185?v=4",
    },
    {
      id: 2,
      name: tGeneral("lorem").slice(150),
      designation: tGeneral("lorem").slice(150),
      image: "https://avatars.githubusercontent.com/u/100057185?v=4",
    },
    {
      id: 3,
      name: tGeneral("lorem").slice(150),
      designation: tGeneral("lorem").slice(150),
      image: "https://avatars.githubusercontent.com/u/100057185?v=4",
    },
    {
      id: 4,
      name: tGeneral("lorem").slice(150),
      designation: tGeneral("lorem").slice(150),
      image: "https://avatars.githubusercontent.com/u/100057185?v=4",
    }
  ]

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
      onContextMenu={(e) => e.preventDefault()}
      className="w-full h-full">

      <div
        style={{
          width: '100vw',
          height: '100vh',
          position: 'relative',
          cursor: 'none',
        }}>

        <div className="fixed top-0 flex w-full px-[25px] py-[15px] sm:px-[50px] sm:py-[30px] justify-between items-center cursor-none z-10">
          <div className="flex flex-grow flex-col gap-y-[5px]">
            <div className="text-[18px] font-bold text-text">
              {tGeneral("cursors_dot")}
            </div>

            <div className="text-[15px] text-zinc-800">
              / {tGeneral("made_by")}
            </div>
          </div>

          <div>
            <IconButton
              icon={LogInIcon}
              onClick={() => onModalOpen("register")}
              className={cn(
                "block sm:hidden",
                // !session.data && "hidden"
              )} />

            <Button
              onClick={() => onModalOpen("register")}
              onMouseEnter={() => setCursorType("pointer")}
              onMouseLeave={() => setCursorType("default")}
              variant="secondary"
              size="sm"
              className={cn(
                "hidden sm:block cursor-none"
                // session.data && "hidden"
              )}>
              {tGeneral("register")}
            </Button>
          </div>
        </div>

        {/* Remote cursors */}
        {clients
          .filter(client => client.id !== socket.id)
          .map(client => (
            <Cursor
              key={client.id}
              position={client.position}
              text={client.id}
            />
          ))}

        {/* Local cursor */}
        <Cursor
          position={localPosition}
          isLocal={true}
          type={cursorType} />

        {/* <ModalProvider /> */}

        <div
          onMouseEnter={() => setCursorType("pointer")}
          onMouseLeave={() => setCursorType("default")}
          className="fixed bottom-0 flex gap-x-[15px] w-full px-[25px] py-[15px] sm:px-[50px] sm:py-[30px] justify-center items-center cursor-none z-10">
          <div className="flex flex-row items-center justify-center">
            <AnimatedTooltip items={people} />
          </div>

          <div className="text-zinc-600 max-w-[90px] text-[12px] font-medium">
            {tGeneral("online_users", { count: 5 })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;