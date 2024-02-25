interface getData {
  id: number;
  title: string;
  subTitle: string;
  categoryId: number;
  content: string;
  thumbnail: string;
  // tags: TagItem[]; // 필요하다면 활성화하세요.
}

interface CardProps {
  post: getData;
}

export default function Card({ post }: CardProps) {
  const { title, subTitle } = post;
  return (
    <div className="flex p-4 justify-between mb-8  border-[1px] border-solid border-black">
      <div>
        <div className="mb-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <h3 className="">{subTitle}</h3>
        </div>
        <div className="text-sm">날짜</div>
      </div>
      <div className="flex items-center">
        <div className="mr-4">수정</div>
        <div>삭제</div>
      </div>
    </div>
  );
}
