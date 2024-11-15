import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Navbar = () => {
  const [navbar, setNavbar] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const navbarRef = ref(db, "navbar");
    onValue(navbarRef, (snapshot) => {
      const data = snapshot.val();
      setNavbar(data);
    });
  }, []);
  const [activeSection, setActiveSection] = useState("home");


  useEffect(() => {
    const sections = ["home", "about", "service", "work", "contact"];
    const options = { threshold: 0.3 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); 
        }
      });
    }, options);

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);


  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); 
      setActiveSection(sectionId); 
    }
  };

  return (
    <nav
      className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll" href="#page-top">
          {navbar.nav1}
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <div
          className="navbar-collapse collapse justify-content-end"
          id="navbarDefault"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link js-scroll ${
                  activeSection === "home" ? "active" : ""
                }`}
                href="#home"
                onClick={() => handleNavClick("home")}
              >
                {navbar.nav2}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link js-scroll ${
                  activeSection === "about" ? "active" : ""
                }`}
                href="#about"
                onClick={() => handleNavClick("about")}
              >
                {navbar.nav3}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link js-scroll ${
                  activeSection === "service" ? "active" : ""
                }`}
                href="#service"
                onClick={() => handleNavClick("service")}
              >
                {navbar.nav4}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link js-scroll ${
                  activeSection === "work" ? "active" : ""
                }`}
                href="#work"
                onClick={() => handleNavClick("work")}
              >
                {navbar.nav5}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link js-scroll ${
                  activeSection === "contact" ? "active" : ""
                }`}
                href="#contact"
                onClick={() => handleNavClick("contact")}
              >
                {navbar.nav6}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
