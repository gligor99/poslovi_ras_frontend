import { Routes, Route } from "react-router-dom";
import {
  AboutPage,
  ContactPage,
  HomePage,
  SharedLayout,
  JobsPage,
  ErrorPage,
  SingleJob,
  LoginPage,
} from "./pages/index";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="/jobs/:jobID" element={<SingleJob />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
