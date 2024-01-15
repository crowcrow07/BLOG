import Blog from "@/containers/blog";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="flex h-screen text-white">
        <nav className="w-[20vw] bg-[#0F0F0F]   flex flex-col justify-between items-center">
          <div className="flex flex-col gap-y-12 mt-20 text-3xl font-bold">
            <Link href="https://github.com/crowcrow07" target="_blank">
              GitHub
            </Link>
            <Link href="https://crow07.tistory.com/" target="_blank">
              Tistory Blog
            </Link>
            <Link
              href="https://www.linkedin.com/in/%EB%AF%BC%EC%9E%AC-%EA%B9%80-27818b266/"
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link
              href="https://freezing-green-c96.notion.site/810f618a35b547f98bb28711716dc6c5"
              target="_blank"
            >
              Notion
            </Link>
          </div>
          <div className="flex flex-col gap-y-2 mb-10">
            <div>skathd3402@gmail.com</div>
            <div>뭐넣지</div>
          </div>
        </nav>
        <div className="relative w-[80vw]">
          <Image
            src="/img/background.jpeg"
            alt="BackgroundImg"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute z-10 w-full h-full bg-black opacity-50" />
          <div className="absolute z-20 text-center text-white w-full h-full flex flex-col justify-center">
            <p>좌절을 기록하며 성장하는</p>
            <h1>김민재입니다.</h1>
            <p>프론트엔드 개발자를 희망하고 있습니다.</p>
            <p>모든 경험을 기록하며 빠르게 성장하는것을 좋아합니다.</p>
            <p>찰나의 좌절은 기록을 통해 지속 가능한 성장으로 만듭니다.</p>
            <div>아이콘</div>
          </div>
        </div>
      </header>
      <main>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </main>
      <footer></footer>
    </div>
  );
}
