import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  title?: string;
  children: React.ReactNode;
}

const Terminal = ({ title = 'bash', children }: TerminalProps) => {
  return (
    <div className="my-8 rounded border border-white/20 bg-black font-mono text-sm">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/20 bg-white/5">
        <div className="flex items-center gap-2">
          {/* Minimal window controls */}
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full border border-white/40" />
            <div className="w-2.5 h-2.5 rounded-full border border-white/40" />
            <div className="w-2.5 h-2.5 rounded-full border border-white/40" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-white/60 text-xs">
          <TerminalIcon size={12} />
          <span>{title}</span>
        </div>
        <div className="w-12"></div> {/* Spacer for centering */}
      </div>
      <div className="p-6 bg-black text-white">
        {children}
      </div>
    </div>
  );
};

export default Terminal;
