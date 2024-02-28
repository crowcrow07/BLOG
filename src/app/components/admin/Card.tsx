interface getData {
  id: number;
  title: string;
  subTitle: string;
  categoryId: number;
  content: string;
  thumbnail: string;
  // tags: TagItem[];
}

interface CardProps {
  post: getData;
  onDelete: (id: number) => void;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  setEditPostData: React.Dispatch<React.SetStateAction<any>>;
}

export default function Card({
  post,
  onDelete,
  setEditPostData,
  setPage,
}: CardProps) {
  const { id, title, subTitle } = post;

  const deleteButtonHandler = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/post/`, {
        method: "DELETE",
        body: JSON.stringify(id),
      });
      if (response.ok) {
        console.log("Delete successful");
        onDelete(id);
      } else {
        throw new Error("delete failed");
      }
    } catch (err) {
      console.error("delete error:", err);
    }
  };
  const updateButtonHandler = async () => {
    const postData = { ...post }; // 현재 포스트의 데이터
    setEditPostData(postData); // Admin 컴포넌트의 상태 업데이트
    setPage("createPost"); // 페이지 전환
  };
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
        <button type="button" onClick={updateButtonHandler} className="mr-4">
          수정
        </button>
        <button type="button" onClick={deleteButtonHandler}>
          삭제
        </button>
      </div>
    </div>
  );
}
