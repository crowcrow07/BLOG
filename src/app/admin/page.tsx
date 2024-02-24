"use client";

import { useState } from "react";

import CreatePost from "@/components/admin/CreatePost";
import ManagePost from "@/components/admin/ManagePost";
import ManageCategory from "@/components/admin/ManageCategory";
import ManageTag from "@/components/admin/ManageTag";

import styles from "@/styles/Admin.module.scss";

export default function Admin() {
  const [page, setPage] = useState("createPost");

  const navHandler = (type: string) => {
    setPage(type);
  };

  const viewPage = (type: string) => {
    switch (type) {
      case "createPost":
        return <CreatePost />;
      case "managePost":
        return <ManagePost />;
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
        <button onClick={() => navHandler("createPost")}>글 작성</button>
        <button onClick={() => navHandler("managePost")}>글 관리</button>
        <button onClick={() => navHandler("manageCategory")}>
          카테고리 관리
        </button>
        <button onClick={() => navHandler("manageTag")}>태그 관리</button>
      </nav>
      <section className={styles.introContainer}>{viewPage(page)}</section>
    </header>
  );
}
