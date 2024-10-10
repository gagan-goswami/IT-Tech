import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutPage from "./Pages/About/Aboutpage";
import Layout from "./Components/Layout";
import ServicePage from "./Pages/Service/Servicepage";
import ContactPage from "./Pages/Contact/ContactPage";
import Portfolio from "./Pages/Portfolio/Portfoliopage";
import Teampage from "./Pages/Team/Teampage";
import Faqs from "./Pages/Faqs/Faqpage";
import "./App.css";
import Testimonial from "./Pages/Testimonial/Testimonialpage";
import Errorpage from "./Pages/404-page/Error";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contactus" element={<ContactPage />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/Team" element={<Teampage />} />
          <Route path="Faqs" element={<Faqs />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/404error" element={<Errorpage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
