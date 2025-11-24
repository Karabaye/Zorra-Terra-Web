import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
