import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./vvComponents/navbar";
import Homepage from "./vvComponents/homepage";
import AboutUs from "./vvComponents/aboutUs";
import FAQsPage from "./vvComponents/faqs";
import ContactUsPage from "./vvComponents/contact";
import Elections from "./vvComponents/elections";
function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/elections" element={<Elections />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
