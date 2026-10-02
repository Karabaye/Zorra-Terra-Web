import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import Preloader from "../components/Preloader";
import PrivacyConsent from "../components/PrivacyConsent";

const AppLayout = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#021732] text-white">
      <Preloader onComplete={() => setIsAppLoading(false)} />

      <Header />
      <main className="bg-transparent animate-in fade-in duration-1000">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <PrivacyConsent />
    </div>
  );
};

export default AppLayout;
