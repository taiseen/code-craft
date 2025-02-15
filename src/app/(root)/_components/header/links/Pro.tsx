import { Sparkles } from "lucide-react";
import Link from "next/link";

const Pro = () => {
  return (
    <Link href="/pricing" className="proNavigationLink">
      <Sparkles className="w-4 h-4 text-amber-400 hover:text-amber-300" />
      <span className="text-sm font-medium text-amber-400/90 hover:text-amber-300">
        Pro
      </span>
    </Link>
  );
};

export default Pro;
