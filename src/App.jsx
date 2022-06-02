import { Routes, Route } from "react-router-dom";
import { AboutPage, HomePage, SharedLayout } from "./pages/index";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
