"use client";

import { useState, useCallback } from "react";

export default function AddTagInput({ form, setForm, isValid = true }: any) {
  const [hashtag, setHashtag] = useState("");

  const handleKeyUp = useCallback(
    (e: any) => {
      if (e.keyCode === 13 && e.target.value.trim() !== "") {
        const newHashtag = e.target.value.trim();
        setForm((prevForm: any) => ({
          ...prevForm,
          tags: [...prevForm.tags, { tag: newHashtag }],
        }));
        setHashtag("");
      }
    },
    [setForm]
  );

  const removeHashtag = useCallback(
    (hashtagToRemove: any) => {
      setForm((prevForm: any) => ({
        ...prevForm,
        tags: prevForm.tags.filter((item: any) => item.tag !== hashtagToRemove),
      }));
    },
    [setForm]
  );

  return (
    <div>
      <p
        className={`mb-2 font-bold ${isValid ? "text-gray-200" : "text-error"}`}
      >
        태그
      </p>
      <div className="flex w-[355px] max-[520px]:w-[320px] flex-wrap">
        {form.tags.map((item: any, index: any) => (
          <div
            key={index}
            role="presentation"
            className="flex items-center justify-center px-4 py-2 mt-2 mb-4 mr-2 font-bold  bg-transparent border border-solid rounded-full cursor-pointer hover:border-red-500 border-pointPurple-100"
            onClick={() => removeHashtag(item.tag)}
            onKeyUp={() => removeHashtag(item.tag)}
          >
            {item.tag}
            <span className="flex items-center justify-center ml-4 text-red-500">
              ✕
            </span>
          </div>
        ))}
      </div>
      <input
        className={`${
          isValid ? "border-gray-200" : "border-error"
        } w-[350px] h-[40px] max-[520px]:w-[320px] mt-1 px-2 outline-none border border-solid  font-normal text-sm bg-transparent`}
        type="text"
        value={hashtag}
        onChange={(e) => setHashtag(e.target.value)}
        onKeyUp={handleKeyUp}
        maxLength={32}
        placeholder="원하는 재료를 기입하고 엔터"
      />
      <div className="mb-6 h-7">
        <p className={`${isValid && "hidden"} text-sm text-error`}>
          태그를 한개 이상 작성해서 엔터를 눌러주세요
        </p>
      </div>
    </div>
  );
}
