import { Outlet } from "react-router";
import Header from "./Header";

const AppLayout = () => (
  <div className="">
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
);

export default AppLayout;
