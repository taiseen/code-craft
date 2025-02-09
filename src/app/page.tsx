// 'use client'

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  // UserButton,
} from "@clerk/nextjs";

const Home = () => {
  console.log("Home page...");

  return (
    <div className="text-center">
      <SignedOut>
        <SignInButton>
          <button className="bg-blue-500 text-white p-2">SignUp</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
};

export default Home;
