import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import Preloader from "../components/Preloader";

const AppLayout = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#021732] text-white">
      <Preloader onComplete={() => setIsAppLoading(false)} />

      {!isAppLoading && (
        <>
          <Header />
          <main className="bg-transparent animate-in fade-in duration-1000">
            <Outlet />
          </main>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </div>
  );
};

export default AppLayout;
