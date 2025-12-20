import React from 'react';
import { AlertCircle, Info, CheckCircle, AlertTriangle } from 'lucide-react';

type NoteType = 'info' | 'warning' | 'success' | 'danger';

interface NoteProps {
  type?: NoteType;
  title?: string;
  children: React.ReactNode;
}

const Note = ({ type = 'info', title, children }: NoteProps) => {
  const icons = {
    info: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    danger: AlertCircle
  };

  const colors = {
    info: 'text-base0D',
    warning: 'text-base0A',
    success: 'text-base0B',
    danger: 'text-base09'
  };

  const Icon = icons[type];
  const colorClass = colors[type];

  return (
    <div className={`my-6 p-4 bg-bg-secondary/30 rounded transition-colors duration-200`}>
      <div className="flex items-start gap-4">
        <Icon className={`mt-1 shrink-0 ${colorClass}`} size={20} strokeWidth={1.5} />
        <div className="flex-1">
          {title && <h4 className={`font-bold mb-2 text-sm uppercase tracking-wide ${colorClass}`}>{title}</h4>}
          <div className="text-primary/80 leading-relaxed text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
