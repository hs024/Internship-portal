import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InternshipList from "./pages/InternshipList";
import InternshipDetail from "./pages/InternshipDetail";
import ApplyPage from "./pages/ApplyPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/internships" element={<InternshipList />} />
        <Route path="/internships/:id" element={<InternshipDetail />} />
        <Route path="/apply/:id" element={<ApplyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
