import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import AddTagInput from "./AddTagInput";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
import "react-quill/dist/quill.snow.css";

interface Category {
  id: number;
  name: string;
}

export default function CreatePost({ editData }: any) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [value, setValue] = useState({
    title: "",
    subTitle: "",
    categoryId: 0,
    // tags: [],
    content: "", // content 추가
    thumbnail: "",
  });

  useEffect(() => {
    if (editData) {
      setValue({ ...editData });
    }
  }, [editData]);

  useEffect(() => {
    const getCategory = async () => {
      const result = await fetch("http://localhost:3000/api/category");
      const data = await result.json();
      setCategories(data.data);
    };

    getCategory();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleContentChange = (content: string) => {
    setValue((prevValue) => ({
      ...prevValue,
      content: content,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const method = editData ? "PUT" : "POST"; // 수정 데이터가 있으면 PUT, 없으면 POST

    try {
      const response = await fetch(
        `http://localhost:3000/api/post/${editData ? editData.id : ""}`,
        {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      // 성공적으로 데이터를 처리했다면 추가 로직 처리
    } catch (error) {
      console.error("Submit Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>타이틀</label>
        <input
          type="text"
          name="title"
          value={value.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>서브 타이틀</label>
        <input
          type="text"
          name="subTitle"
          value={value.subTitle}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>카테고리</label>
        <select
          name="categoryId"
          value={value.categoryId}
          onChange={handleChange}
        >
          <option value="">선택하세요</option>
          {categories &&
            categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
        </select>
      </div>
      <div>
        {/* <label>태그</label>
        <input
          type="text"
          name="tags"
          value={value.tagId}
          onChange={handleChange}
        /> */}
        {/* <AddTagInput form={value} setForm={setValue} /> */}
        {/* 태그를 서버에서 추가하고
          태그 테이블에서 조회를 하고 없으면 태그 테이블에 insert하고 생성된 id를 가져와서
          post_tag 테이블에 등록
          태그 테이블에서 조회를 하고 있으면 태그 id를 가져와서 post_tag 테이블에 등록
        */}
      </div>
      <ReactQuill
        theme="snow"
        value={value.content}
        onChange={handleContentChange}
      />
      <button type="submit">등록</button>
    </form>
  );
}
