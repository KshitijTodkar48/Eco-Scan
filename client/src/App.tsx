import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import OffersPage from "./pages/OffersPage";
import { RecoilRoot } from "recoil";
import ScanningPage from "./pages/ScanningPage";

const App = () => {
  return (
    <Router>
      <RecoilRoot>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/scan" element={<ScanningPage />} />
          <Route path="/offers" element={<OffersPage />} />
        </Routes>
      </RecoilRoot>
    </Router>
  );
};

export default App;