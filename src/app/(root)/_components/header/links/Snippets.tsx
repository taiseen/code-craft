import { Code2 } from "lucide-react";
import Link from "next/link";

const Snippets = () => {
  return (
    <Link href="/snippets" className="snippetsNavigationLink group">
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 
    to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
      />

      <Code2 className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />

      <span
        className="text-sm font-medium relative z-10 group-hover:text-white
     transition-colors"
      >
        Snippets
      </span>
    </Link>
  );
};

export default Snippets;
