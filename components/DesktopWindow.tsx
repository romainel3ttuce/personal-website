'use client';

import React, { useState, useRef, ReactNode } from 'react';
import Draggable from 'react-draggable';

interface DesktopWindowProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  defaultPosition?: { x: number; y: number };
}

export default function DesktopWindow({
  title,
  children,
  isOpen,
  onClose,
  defaultPosition = { x: 100, y: 100 }
}: DesktopWindowProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const nodeRef = useRef(null);

  if (!isOpen) return null;

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 left-4 z-50 bg-gray-800 text-white px-4 py-2 rounded shadow-lg hover:bg-gray-700 transition"
      >
        {title}
      </button>
    );
  }

  return (
    <Draggable handle=".window-header" nodeRef={nodeRef} defaultPosition={defaultPosition}>
      <div
        ref={nodeRef}
        className="fixed bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-300 w-96"
        style={{ minWidth: '280px', minHeight: '200px', resize: 'both', overflow: 'auto' }}
      >
        {/* Window Header */}
        <div className="window-header bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-t-lg flex justify-between items-center cursor-move">
          <span className="font-semibold">{title}</span>
          <div className="flex gap-2">
            <button
              onClick={() => setIsMinimized(true)}
              className="w-6 h-6 rounded bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-bold flex items-center justify-center"
              aria-label="Minimize"
            >
              -
            </button>
            <button
              onClick={onClose}
              className="w-6 h-6 rounded bg-red-500 hover:bg-red-600 text-white text-xs font-bold flex items-center justify-center"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>

        {/* Window Content */}
        <div className="p-4 flex-grow">{children}</div>
      </div>
    </Draggable>
  );
}