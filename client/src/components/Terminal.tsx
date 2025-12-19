import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  title?: string;
  children: React.ReactNode;
}

const Terminal = ({ title = 'bash', children }: TerminalProps) => {
  return (
    <div className="my-8 rounded border border-border bg-bg-primary font-mono text-sm shadow-xl transition-colors duration-200">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-bg-secondary/50">
        <div className="flex items-center gap-2">
          {/* Minimal window controls */}
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full border border-primary/20 bg-primary/10" />
            <div className="w-2.5 h-2.5 rounded-full border border-primary/20 bg-primary/10" />
            <div className="w-2.5 h-2.5 rounded-full border border-primary/20 bg-primary/10" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-primary/60 text-xs">
          <TerminalIcon size={12} />
          <span>{title}</span>
        </div>
        <div className="w-12"></div> {/* Spacer for centering */}
      </div>
      <div className="p-6 bg-bg-primary text-primary">
        {children}
      </div>
    </div>
  );
};

export default Terminal;
