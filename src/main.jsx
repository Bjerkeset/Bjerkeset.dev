import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./assets/navbar.jsx";
import IntroSection from "./assets/homepageIntro.jsx";
import "./index.css";
import Skills from "./assets/skills.jsx";
import Portfolio from "./assets/portfolio.jsx";
import Footer from "./assets/footer.jsx";
import Contact from "./assets/contact.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <IntroSection />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
  </React.StrictMode>
);
