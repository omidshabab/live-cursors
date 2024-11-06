import React from 'react';
import { CursorPosition } from '@/types';
import { cn } from '@/lib/utils';

interface CursorProps {
     position: CursorPosition;
     isLocal?: boolean;
}

const Cursor: React.FC<CursorProps> = ({ position, isLocal = false }) => {
     const cursorColor = isLocal ? "fill-primary" : "fill-sky-600";

     return (
          <div
               className={cn(
                    'absolute pointer-events-none z-[1000]',
                    isLocal && 'transition-all duration-100 ease-out'
               )}
               style={{ left: position.x, top: position.y }}>

               {/* Cursor */}
               <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className={cursorColor}
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                         d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
                         stroke="white"
                         strokeWidth="1"
                         className={cursorColor}
                    />
               </svg>

               {/* Label */}
               {!isLocal && (
                    <div
                         className="flex flex-nowrap w-auto px-[10px] py-[2px] text-[10px] rounded-full transform -translate-x-1/2 bg-sky-600/5 text-sky-800">
                         user: {position.clientId.slice(0, 4)}
                    </div>
               )}
          </div>
     );
};

export default Cursor;
