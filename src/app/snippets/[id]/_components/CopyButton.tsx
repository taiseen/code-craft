"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

const CopyButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    // Copy code to clipboard
    await navigator.clipboard.writeText(code);

    setCopied(true);
    
    // Reset copied state after 2 seconds
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <button
      onClick={copyToClipboard}
      type="button"
      className="p-2 hover:bg-white/10 rounded-lg transition-all duration-200 group relative"
    >
      {copied ? (
        <Check className="size-4 text-green-400" />
      ) : (
        <Copy className=" size-4 text-gray-400 group-hover:text-gray-300" />
      )}
    </button>
  );
};

export default CopyButton;
