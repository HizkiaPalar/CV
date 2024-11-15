import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import About from "./components/section/about";
import Footer from "./components/section/footer";
import Interest from "./components/section/interest";
import Portfolio from "./components/section/portfolio";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      once: true, // Animasi hanya terjadi sekali saat scroll pertama kali
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <div data-aos="fade-right">
        <About />
      </div>
      <div data-aos="fade-left">
        <Interest />
      </div>
      <div data-aos="fade-right">
        <Portfolio />
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>
    </div>
  );
}

export default App;
