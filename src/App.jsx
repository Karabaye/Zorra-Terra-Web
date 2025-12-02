import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AppLayout from "./ui/AppLayout";
import Stories from "./pages/Stories";
import Gallery from "./pages/Gallery";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="stories" element={<Stories />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
