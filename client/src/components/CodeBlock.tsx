import { useState, useEffect } from 'react';
import { Check, Copy, Terminal as TerminalIcon } from 'lucide-react';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-yaml';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

const CodeBlock = ({ code, language = 'bash', filename }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded border border-base03 bg-base02 transition-colors duration-200">
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-base03 bg-base02">
          <div className="flex items-center gap-2 text-xs text-base04 font-mono uppercase tracking-wider">
            {language === 'bash' && <TerminalIcon size={12} />}
            <span>{filename || language}</span>
          </div>
          <button
            onClick={copyToClipboard}
            className="text-base05/60 hover:text-base05 transition-colors"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
      )}
      <div className="p-4 overflow-x-auto bg-base02">
        <pre className="!bg-transparent !p-0 !m-0 !border-0">
          <code className={`language-${language} text-sm font-mono text-base07`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
