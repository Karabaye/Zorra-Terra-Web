import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ShortEscapeTours = lazy(() => import("./pages/ShortEscapeTours"));
const Gallery = lazy(() => import("./pages/Gallery"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const TravelWithUs = lazy(() => import("./pages/TravelWithUs"));
const Booking = lazy(() => import("./pages/Booking"));

// Simple loading component
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-[#031d3d]">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#031d3d',
            color: '#fff',
            border: '1px solid rgba(74, 222, 128, 0.2)',
            borderRadius: '12px',
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif'
          },
        }}
      />
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="short-escapes" element={<ShortEscapeTours />} />
            {/* Legacy route support */}
            <Route path="stories" element={<ShortEscapeTours />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="travel-with-us" element={<TravelWithUs />} />
            <Route path="booking" element={<Booking />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
