"use client";
import React, { useEffect, useState } from "react";
import { signIn, getProviders } from "next-auth/react";
import Image from "next/image";

import styles from "@/styles/signin.module.scss";
import kakaoButton from "@/public/images/kakao_login_large_narrow.png";
import googleDarkButton from "@/public/images/web_dark_sq_SI@3x.png";

function Login() {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res: any = await getProviders();
      setProviders(res);
    })();
  }, []);

  const handleGoogle = async () => {
    const result = await signIn("google", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  const handleKakao = async () => {
    const result = await signIn("kakao", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <main className={styles.container}>
      <div className={styles.buttonContents}>
        <div className={styles.logoContainer}>
          <a href="/">까악 블로그</a>
        </div>
        <div className={styles.googleContainer}>
          <button className="h-[59px] w-full" onClick={handleGoogle}>
            {/* {theme && themeGoogleButton(theme)} */}
            <Image src={googleDarkButton} alt="googleButton" />
          </button>
        </div>
        <div className={styles.kakaoContainer}>
          <button className="h-[59px] w-full" onClick={handleKakao}>
            <Image src={kakaoButton} alt="kakaoButton" width={400} />
          </button>
        </div>
      </div>
    </main>
  );
}

export default Login;
