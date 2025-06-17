
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './vvComponents/navbar';
import Homepage from './vvComponents/homepage';
import AboutUs from './vvComponents/aboutUs';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs/>} />
          {/* <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<ContactUsPage />} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;