import type { Metadata } from "next";

import "@styles/globals.css";
import "@styles/color.css";

import { notoSans } from "@styles/fonts";
import { setInitialColorMode } from "@components/theme";

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
      <body className={`relative ${notoSans.className}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitializerScript,
          }}
        ></script>
        <div className="fixed flex z-50 text-white bg-black bottom-0 right-0">
          <div>아이콘 1</div>
          <div>아이콘 2</div>
        </div>
        {children}
      </body>
    </html>
  );
}
