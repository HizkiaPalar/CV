import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import Kia from "../../../assets/img/IMG_1847.jpg";

const About = () => {
  const [htmlProgress, setHtmlProgress] = useState(0);
  const [cssProgress, setCssProgress] = useState(0);
  const [jsProgress, setJsProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // State untuk kontrol visibilitas
  const aboutRef = useRef(null); // Referensi untuk section About
  const animationDuration = 3; // Durasi animasi dalam detik

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Aktifkan animasi saat About terlihat
          observer.disconnect(); // Hentikan observer setelah aktif sekali
        }
      },
      { threshold: 0.2 } // Muncul animasi saat 30% dari elemen terlihat
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animasi progress bar untuk HTML, CSS, dan JavaScript secara bersamaan
      setTimeout(() => setHtmlProgress(70), 300);
      setTimeout(() => setCssProgress(60), 600);
      setTimeout(() => setJsProgress(40), 900);
    }
  }, [isVisible]);

  return (
    <section id="about" className="about-mf sect-pt4 route" ref={aboutRef}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img src={Kia} />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p>
                          <span className="title-s">Name: </span>{" "}
                          <span>Hizkia Palar</span>
                        </p>
                        <p>
                          <span className="title-s">Profile: </span>{" "}
                          <span>Student</span>
                        </p>
                        <p>
                          <span className="title-s">Email: </span>{" "}
                          <span>Hizkiapalar294@gmail.com</span>
                        </p>
                        <p>
                          <span className="title-s">Phone: </span>{" "}
                          <span>085255069945</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Programming Language</p>

                    {/* HTML Skill */}
                    <span>HTML </span>
                    <span className="pull-right">
                      {isVisible && (
                        <CountUp end={70} duration={animationDuration} />
                      )}
                      %
                    </span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${htmlProgress}%`,
                          transition: `width ${animationDuration}s ease-in-out`,
                        }}
                        aria-valuenow={htmlProgress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>

                    {/* CSS Skill */}
                    <span>CSS </span>
                    <span className="pull-right">
                      {isVisible && (
                        <CountUp end={60} duration={animationDuration} />
                      )}
                      %
                    </span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${cssProgress}%`,
                          transition: `width ${animationDuration}s ease-in-out`,
                        }}
                        aria-valuenow={cssProgress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>

                    {/* JavaScript Skill */}
                    <span>JAVASCRIPT </span>
                    <span className="pull-right">
                      {isVisible && (
                        <CountUp end={40} duration={animationDuration} />
                      )}
                      %
                    </span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${jsProgress}%`,
                          transition: `width ${animationDuration}s ease-in-out`,
                        }}
                        aria-valuenow={jsProgress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About me</h5>
                    </div>
                    <p className="lead">
                      Hello! My name is Hizkia Palar, and I’m a student at
                      Universitas Klabat, Faculty of Computer Science, majoring
                      in Information Systems. I have a strong interest in web
                      development, especially in front-end design. Currently,
                      I’m focused on developing my skills in creating engaging
                      and intuitive user interfaces and experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
