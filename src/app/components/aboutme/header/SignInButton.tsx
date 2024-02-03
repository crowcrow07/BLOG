"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { IconLogin, IconLogout } from "@/public/svgs";
import React from "react";

function SignInButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div>
        <button onClick={() => signOut()}>
          <IconLogout width={"4rem"} height={"4rem"} />
        </button>
      </div>
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
