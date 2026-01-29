import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AppLayout from "./ui/AppLayout";
import Stories from "./pages/Stories";
import Gallery from "./pages/Gallery";
import ContactPage from "./pages/ContactPage";
import StoryDetail from "./components/StoryDetails";
import TravelWithUs from "./pages/TravelWithUs";
import Booking from "./pages/Booking";
import ScrollToTop from "./components/ScrollToTop";

import { Toaster } from "react-hot-toast";

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
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="stories" element={<Stories />} />
          <Route path="stories/:id" element={<StoryDetail />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="travel-with-us" element={<TravelWithUs />} />
          <Route path="booking" element={<Booking />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
