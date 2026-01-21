import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const AppLayout = () => (
  <div className="min-h-screen bg-[#021732] text-white">
    <Header />
    <main className="bg-transparent">
      <Outlet />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default AppLayout;
