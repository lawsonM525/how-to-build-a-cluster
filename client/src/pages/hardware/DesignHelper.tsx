
export const CoreVisual = ({ count, label, type = 'std' }: { count: number; label: string; type?: 'std' | 'big-little' }) => (
  <div className="flex flex-col items-center gap-2 p-3 bg-bg-secondary/5 rounded border border-border/50">
    <div className={`relative bg-primary/5 border border-primary/30 rounded p-1 flex flex-wrap content-center justify-center gap-1 transition-all hover:border-primary/60 hover:bg-primary/10 ${count > 8 ? 'w-20 h-20' : 'w-16 h-16'} text-primary`}>
      {Array.from({ length: count }).map((_, i) => (
        <div 
          key={i} 
          className={`
            rounded-[1px] bg-current
            ${count === 1 ? 'w-8 h-8' : ''}
            ${count === 2 ? 'w-6 h-10' : ''}
            ${count === 4 ? 'w-5 h-5' : ''}
            ${count === 8 ? 'w-3 h-3' : ''}
            ${count > 8 ? 'w-2 h-2 opacity-80' : ''}
            ${type === 'big-little' && i >= 4 ? 'opacity-50' : ''}
          `}
        />
      ))}
      <div className="absolute -bottom-2 -right-2 bg-bg-primary border border-primary text-[10px] px-1 rounded text-primary font-mono">
        {count}c
      </div>
    </div>
    <span className="text-xs font-bold text-primary/70">{label}</span>
  </div>
);
