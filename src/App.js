import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminUi from "./ui/admin/AdminUi";
import AddBook from "./ui/admin/adminComponent/AddBook/AddBook";
import LandingPage from "./ui/user/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* default Path */}
        <Route path="/" element={<LandingPage />} />

        {/* Admin path */}
        <Route path="/admin" element={<AdminUi />}></Route>
        <Route path="/admin/AddBook" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
