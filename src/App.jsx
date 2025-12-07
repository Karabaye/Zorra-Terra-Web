import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AppLayout from "./ui/AppLayout";
import Stories from "./pages/Stories";
import Gallery from "./pages/Gallery";
import ContactPage from "./pages/ContactPage";
import StoryDetail from "./components/StoryDetails";
import TravelWithUs from "./pages/TravelWithUs";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="stories" element={<Stories />} />
          <Route path="stories/:id" element={<StoryDetail />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="travel-with-us" element={<TravelWithUs />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
