import Header from "@/app/components/aboutme/header";
import Main from "@/app/components/aboutme/main";
import AdminRoute from "./utils/AdminRoute";

export default function Home() {
  return (
    <div className="">
      <AdminRoute />
      <Header />
      <Main />
      <footer></footer>
    </div>
  );
}
