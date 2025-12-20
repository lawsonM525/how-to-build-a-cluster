import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  title?: string;
  children: React.ReactNode;
}

const Terminal = ({ title = 'bash', children }: TerminalProps) => {
  return (
    <div className="my-8 rounded border border-base03 bg-base02 font-mono text-sm shadow-xl transition-colors duration-200">
      <div className="flex items-center justify-between px-4 py-2 border-b border-base03 bg-base02">
        <div className="flex items-center gap-2">
          {/* Minimal window controls */}
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-base09/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-base0A/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-base0B/80" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-base04 text-xs">
          <TerminalIcon size={12} />
          <span>{title}</span>
        </div>
        <div className="w-12"></div> {/* Spacer for centering */}
      </div>
      <div className="p-6 bg-base02 text-base07">
        {children}
      </div>
    </div>
  );
};

export default Terminal;
