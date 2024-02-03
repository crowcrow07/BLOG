import Link from "next/link";
import Image from "next/image";

import ThemeToggleButton from "./ThemeToggleButton";

import { IconArrow, IconEmail, IconLogin } from "@/public/svgs";
import { NavbarLink, NavbarName } from "@/app/constants/constants";
import SignInButton from "./SignInButton";

import styles from "@/styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.bgContainer}>
        <Image
          src="/images/background.jpeg"
          alt="BackgroundImg"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
      </div>
      <nav className={styles.navContainer}>
        <div className={styles.linkContainer}>
          <Link href={NavbarLink.GIT_HUB} target="_blank">
            {NavbarName.GIT_HUB}
            <span className="text-red-500">.</span>
          </Link>
          <Link href={NavbarLink.TISTORY_BLOG} target="_blank">
            {NavbarName.TISTORY_BLOG}
            <span className="text-red-500">.</span>
          </Link>
          <Link href={NavbarLink.LINKED_IN} target="_blank">
            {NavbarName.LINKED_IN}
            <span className="text-red-500">.</span>
          </Link>
          <Link href={NavbarLink.NOTION} target="_blank">
            {NavbarName.NOTION}
            <span className="text-red-500">.</span>
          </Link>
        </div>
        <div className={`${styles.buttonListContainer}`}>
          <div className={styles.toggleButtonContainer}>
            <ThemeToggleButton />
          </div>
          <div className="cursor-pointer">
            <IconEmail width={"4rem"} height={"4rem"} />
          </div>
          {/* <Link href={"/api/auth/signin"} className="cursor-pointer">
            <IconLogin width={"4rem"} height={"4rem"} />
          </Link> */}
          <SignInButton />
        </div>
      </nav>
      <section className={styles.introContainer}>
        <div className={styles.overlay} />
        <div className={styles.introText}>
          <p className={`${styles.textMainInfo} font-bold my-4`}>
            좌절을 기록하며 성장하는
          </p>
          <h1 className={`${styles.textMainInfo} font-bold my-4`}>
            <span
              className={`${styles.textMinJae} underline underline-offset-[-5px] decoration-red-500 decoration-[25px]`}
            >
              김민재
            </span>
            입니다.
          </h1>
          <div
            className={`${styles.textSubInfo} mt-8 mb-4 text-3xl flex flex-col gap-1`}
          >
            <p>프론트엔드 개발자를 희망하고 있습니다.</p>
            <p>모든 경험을 기록하며 빠르게 성장하는것을 좋아합니다.</p>
            <p>찰나의 좌절은 기록을 통해 지속 가능한 성장으로 만듭니다.</p>
          </div>
          <div className="h-[140px] flex justify-center items-end animate-bounce">
            <IconArrow width={"3rem"} height={"3rem"} />
          </div>
        </div>
      </section>
    </header>
  );
}
