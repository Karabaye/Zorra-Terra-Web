import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";

// Direct imports ensure full synchronous rendering during SSR/prerendering
// and eliminate flash of loading spinner on initial visit
import Home from "./pages/Home";
import About from "./pages/About";
import ShortEscapeTours from "./pages/ShortEscapeTours";
import TourDetail from "./pages/TourDetail";
import Gallery from "./pages/Gallery";
import ContactPage from "./pages/ContactPage";
import TravelWithUs from "./pages/TravelWithUs";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CancellationPolicy from "./pages/CancellationPolicy";

export const AppRoutes = () => {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#031d3d",
            color: "#fff",
            border: "1px solid rgba(74, 222, 128, 0.2)",
            borderRadius: "12px",
            fontSize: "14px",
            fontFamily: "Inter, sans-serif",
          },
        }}
      />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="short-escapes" element={<ShortEscapeTours />} />
          <Route path="short-escapes/:slug" element={<TourDetail />} />
          {/* Legacy route support */}
          <Route path="stories" element={<ShortEscapeTours />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="travel-with-us" element={<TravelWithUs />} />
          <Route path="booking" element={<Booking />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsConditions />} />
          <Route path="cancellation-policy" element={<CancellationPolicy />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
