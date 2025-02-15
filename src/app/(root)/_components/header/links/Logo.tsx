import { Blocks } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3 group relative">
      {/* Logo hover effect */}
      <div className="headerLogoHoverEffect" />

      {/* Logo */}
      <div className="headerLogo">
        <Blocks className="size-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
      </div>

      <div className="flex flex-col">
        <span className="headerLogoCodeCraft">CodeCraft</span>

        <span className="block text-xs text-blue-400/60 font-medium">
          Interactive Code Editor
        </span>
      </div>
    </Link>
  );
};

export default Logo;
