import { SignInButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";

const LoginButton = () => {
  return (
    <SignInButton mode="modal">
      <button className="loginButton">
        <LogIn className="w-4 h-4 transition-transform" />
        <span>Sign In</span>
      </button>
    </SignInButton>
  );
};

export default LoginButton;
