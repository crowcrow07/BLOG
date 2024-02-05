"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { IconLogin, IconLogout } from "@/public/svgs";
import Image from "next/image";

function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="animate-pulse rounded-full bg-gray-500 opacity-90 w-full h-full"></div>
    );
  }

  if (session && session.user) {
    return (
      <button className="w-full h-full" onClick={() => signOut()}>
        {/* <IconLogout width={"4rem"} height={"4rem"} /> */}
        <Image src={session.user.picture} alt="profile" fill loading="lazy" />
      </button>
    );
  }
  return (
    <div>
      <button onClick={() => signIn()}>
        <IconLogin width={"4rem"} height={"4rem"} />
      </button>
    </div>
  );
}

export default SignInButton;
