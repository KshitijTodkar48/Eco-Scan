import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import OffersPage from "./pages/OffersPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offers" element={<OffersPage />} />
      </Routes>
    </Router>
  );
};

export default App;