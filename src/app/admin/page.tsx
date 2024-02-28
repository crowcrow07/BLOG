"use client";

import { useState, useEffect } from "react";

import CreatePost from "@/components/admin/CreatePost";
import ManagePost from "@/components/admin/ManagePost";
import ManageCategory from "@/components/admin/ManageCategory";
import ManageTag from "@/components/admin/ManageTag";

import styles from "@/styles/Admin.module.scss";
import Link from "next/link";

export default function Admin() {
  const [page, setPage] = useState("createPost");
  const [editPostData, setEditPostData] = useState(null);

  useEffect(() => {
    const lastPage = localStorage.getItem("lastPage") || "createPost";
    setPage(lastPage);
  }, []);

  const navHandler = (type: string) => {
    setPage(type);
    localStorage.setItem("lastPage", type);
  };

  const viewPage = (type: string) => {
    switch (type) {
      case "createPost":
        return <CreatePost editData={editPostData} />;
      case "managePost":
        return (
          <ManagePost setEditPostData={setEditPostData} setPage={setPage} />
        );
      case "manageCategory":
        return <ManageCategory />;
      case "manageTag":
        return <ManageTag />;
      default:
        return <div>404</div>;
    }
  };

  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navContainer}>
        <Link href={"/"}>홈</Link>
        <button onClick={() => navHandler("createPost")}>글 작성</button>
        <button onClick={() => navHandler("managePost")}>글 관리</button>
        <button onClick={() => navHandler("manageCategory")}>
          카테고리 관리
        </button>
        <button onClick={() => navHandler("manageTag")}>태그 관리</button>
      </nav>
      <section className={`${styles.introContainer} overflow-y-scroll`}>
        {viewPage(page)}
      </section>
    </header>
  );
}
