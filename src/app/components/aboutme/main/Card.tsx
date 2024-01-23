import { ReactNode } from "react";
import Image from "next/image";

import styles from "@/styles/Main.module.scss";

type Props = {
  children: ReactNode;
};

// export default function Card({ children, ...props }: Props) {
export default function Card() {
  // 받아야할 데이터 : id, image url, title, subTitle, contents, tag, date, 이동할 경로
  return (
    <div className="h-full flex flex-col">
      <div className={`${styles.none} ${styles.imageContainer}`}>
        <Image
          src={"/images/background.jpeg"}
          alt="thumnail"
          className="object-contain"
          fill
        />
      </div>
      <div className="flex-[2] p-4  flex flex-col justify-between ">
        <div>
          <div className="text-xl font-bold w-full text-start">
            제목이 너무 길면 어떻게 보이게 되는거죠?
          </div>
          <div className="w-full text-start">부제목</div>
        </div>
        <div className={`${styles.none} text-sm w-full text-start`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, atque?
        </div>
      </div>
      <div className="flex-[1] px-4 w-full text-start text-xs flex h-full items-center">
        태그, 날짜
      </div>
    </div>
  );
}
