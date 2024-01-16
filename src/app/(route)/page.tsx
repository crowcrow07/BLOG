import Blog from "@/app/blog";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="fixed w-[80vw] h-screen right-0">
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
      <Blog />
    </>
  );
}
