import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { CheckCircle, Copy, Terminal } from "lucide-react";
import { useState } from "react";

const OutputHeader = () => {
  const { output, error } = useCodeEditorStore();
  const [isCopied, setIsCopied] = useState(false);

  const hasContent = error || output;

  const handleCopy = async () => {
    if (!hasContent) return;
    await navigator.clipboard.writeText(error || output);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <div className="outputHeaderTerminal">
          <Terminal className="w-4 h-4 text-blue-400" />
        </div>

        <span className="text-sm font-medium text-gray-300">Output</span>
      </div>

      {hasContent && (
        <button onClick={handleCopy} className="outputHeaderCopyBtn">
          {isCopied ? (
            <>
              <CheckCircle className="w-3.5 h-3.5" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copy
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default OutputHeader;
