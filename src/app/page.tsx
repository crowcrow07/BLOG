import Header from "@/app/components/aboutMe/header";
import Main from "@/app/components/aboutMe/main";
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
