import type { Metadata } from "next";

import "@/styles/globals.scss";
import "@/styles/variable.scss";

import { notoSans } from "@/app/styles/fonts";
import { setInitialColorMode } from "@/app/components/aboutMe/header/setInitalColorMode";

import FloatingActionButton from "@/components/floatingActionBtn/FloatingActionButton";

export const metadata: Metadata = {
  title: "김민재의 블로그",
  description: "FrontEnd Portfolio Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeInitializerScript = `(function() {
    ${setInitialColorMode.toString()}
    setInitialColorMode();
  })()
  `;

  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`relative ${notoSans.className}`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitializerScript,
          }}
        ></script>
        <div className="fixed flex z-50 bottom-[3rem] right-[3rem]">
          <FloatingActionButton />
        </div>
        {children}
      </body>
    </html>
  );
}
