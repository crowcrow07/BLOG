import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "../styles/globals.css";
import Image from "next/image";

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

export const metadata: Metadata = {
  title: "김민재의 블로그",
  description: "FrontEnd Portfolio Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`relative ${notoSans.className}`}>
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
        <div className="fixed flex z-50 text-white bg-black bottom-0 right-0">
          <div>아이콘 1</div>
          <div>아이콘 2</div>
        </div>
        {children}
      </body>
    </html>
  );
}
