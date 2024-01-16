import Image from "next/image";
import Link from "next/link";

import ThemeToggleButton from "./ThemeToggleButton";

import { IconArrow } from "../../../public/svgs";
import styles from "./index.module.css";

const GIT_HUB = "https://github.com/crowcrow07";
const TISTORY_BLOG = "https://crow07.tistory.com/";
const LINKED_IN =
  "https://www.linkedin.com/in/%EB%AF%BC%EC%9E%AC-%EA%B9%80-27818b266/";
const NOTION =
  "https://freezing-green-c96.notion.site/810f618a35b547f98bb28711716dc6c5";

export default function Blog() {
  return (
    <>
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
            <Link href={GIT_HUB} target="_blank">
              GitHub<span className="text-red-500">.</span>
            </Link>
            <Link href={TISTORY_BLOG} target="_blank">
              Tistory Blog<span className="text-red-500">.</span>
            </Link>
            <Link href={LINKED_IN} target="_blank">
              LinkedIn<span className="text-red-500">.</span>
            </Link>
            <Link href={NOTION} target="_blank">
              Notion<span className="text-red-500">.</span>
            </Link>
          </div>
          <div className="flex flex-col gap-y-2 mb-10">
            <div className={styles.toggleButtonContainer}>
              <ThemeToggleButton />
            </div>
            <div>skathd3402@gmail.com</div>
            <div>Last update: 2024/01/16</div>
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
      <main className="bg-white relative">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </main>
      <footer></footer>
    </>
  );
}
