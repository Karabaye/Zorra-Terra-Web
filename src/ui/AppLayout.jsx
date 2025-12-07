import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppLayout = () => (
  <div className="">
    <Header />
    <main className=" ">
      <Outlet />
    </main>
  </div>
);

export default AppLayout;
