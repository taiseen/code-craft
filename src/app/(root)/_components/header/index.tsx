import { api } from "../../../../../convex/_generated/api";
import { currentUser } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { SignedIn } from "@clerk/nextjs";
import HeaderProfileBtn from "./HeaderProfileBtn";
import LanguageSelector from "./languageSelector";
import ThemeSelector from "./themeSelector";
import Snippets from "./links/Snippets";
import RunButton from "./RunButton";
import Logo from "./links/Logo";
import Pro from "./links/Pro";

const Header = async () => {
  // user info coming from - clerk...
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  const user = await currentUser(); // ger current login user info...

  // user info coming from - convex database...
  const userData = { userId: user?.id || "" };
  const convexUser = await convex.query(api.controllers.users.getUser, userData);

  return (
    <div className="relative z-10">
      <div className="header">
        <div className="hidden lg:flex items-center gap-8">
          <Logo />

          {/* Navigation */}
          <nav className="flex items-center space-x-1">
            <Snippets />
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <ThemeSelector />
            <LanguageSelector hasAccess={Boolean(convexUser?.isPro)} />
          </div>

          {!convexUser?.isPro && <Pro />}

          <SignedIn>
            <RunButton />
          </SignedIn>

          <div className="pl-3 border-l border-gray-800">
            <HeaderProfileBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
