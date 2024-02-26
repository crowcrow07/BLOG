import { ReactNode } from "react";
import Image from "next/image";

import styles from "@/styles/Main.module.scss";

interface Data {
  id: number;
  categoryId: number;
  title: string;
  subtitle: string;
  content: string;
  createdAt: string;
  modifiedAt: string;
  thumbnail: string;
}

interface CardProps {
  data: Data;
}

// export default function Card({ children, ...props }: Props) {
export default function Card({ data }: CardProps) {
  // 받아야할 데이터 : id, image url, title, subTitle, contents, tag, date, 이동할 경로
  const {
    id,
    categoryId,
    title,
    subtitle,
    content,
    createdAt,
    modifiedAt,
    thumbnail,
  } = data;

  return (
    <div className="h-full flex flex-col">
      <div className={`${styles.none} ${styles.imageContainer}`}>
        <Image
          src={`https://crow07.s3.ap-northeast-2.amazonaws.com/${thumbnail}`}
          alt="thumnail"
          className="object-contain"
          fill
        />
      </div>
      <div className="flex-[2] p-4  flex flex-col justify-between ">
        <div>
          <div className="text-xl font-bold w-full text-start">{title}</div>
          <div className="w-full text-start">{subtitle}</div>
        </div>
        <div className={`${styles.none} text-sm w-full text-start`}>
          {content}
        </div>
      </div>
      <div className="flex-[1] px-4 w-full text-start text-xs flex h-full items-center">
        data : {createdAt}
      </div>
    </div>
  );
}
