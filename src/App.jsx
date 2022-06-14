import { Routes, Route } from "react-router-dom";
import {
  AboutPage,
  ContactPage,
  HomePage,
  JobsPage,
  SingleJobPage,
  SingleCompanyPage,
  CompaniesPage,
  LoginPage,
  RegisterPage,
  ProfilePage,
  SharedLayout,
  ErrorPage,
} from "./pages/index";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="jobs/:jobID" element={<SingleJobPage />} />
        <Route path="companies" element={<CompaniesPage />} />
        <Route path="companies/:companyID" element={<SingleCompanyPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
