import { useState } from 'react';
import { Check, Copy, Terminal as TerminalIcon } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

const CodeBlock = ({ code, language = 'bash', filename }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded border border-border bg-bg-primary transition-colors duration-200">
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-bg-secondary/50">
          <div className="flex items-center gap-2 text-xs text-primary/60 font-mono uppercase tracking-wider">
            {language === 'bash' && <TerminalIcon size={12} />}
            <span>{filename || language}</span>
          </div>
          <button
            onClick={copyToClipboard}
            className="text-primary/40 hover:text-primary transition-colors"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
      )}
      <div className="p-4 overflow-x-auto bg-bg-primary">
        <pre className="!bg-transparent !p-0 !m-0 !border-0">
          <code className={`language-${language} text-sm font-mono text-primary/90`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
