<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import { AboutPage, HomePage, SharedLayout } from "./pages/index";

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
=======
const App = () => {
  return (
    <div>
      <h1> Hello </h1>
    </div>
  );
};
>>>>>>> 4133f1ccfcaea5dc7ad46b3c4ce4ec6351d5086c

export default App;
