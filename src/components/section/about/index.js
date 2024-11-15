import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import { getDatabase, ref, onValue } from "firebase/database";

const About = () => {
  const [about, setAbout] = useState({});
  const [htmlProgress, setHtmlProgress] = useState(0);
  const [cssProgress, setCssProgress] = useState(0);
  const [jsProgress, setJsProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false); 
  const aboutRef = useRef(null); 
  const animationDuration = 3; 

  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); 
          observer.disconnect(); 
        }
      },
      { threshold: 0.2 } 
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
                        <img
                          src={about.image || ""}
                          alt="About"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p>
                          <span className="title-s">Name: </span>{" "}
                          <span>{about.name}</span>
                        </p>
                        <p>
                          <span className="title-s">Profile: </span>{" "}
                          <span>{about.profile}</span>
                        </p>
                        <p>
                          <span className="title-s">Email: </span>{" "}
                          <span>{about.email}</span>
                        </p>
                        <p>
                          <span className="title-s">Phone: </span>{" "}
                          <span>{about.phone}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Programming Language</p>

                    {/* HTML Skill */}
                    <span>{about.lang1} </span>
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
                    <span>{about.lang2} </span>
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
                    <span>{about.lang3} </span>
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
                      <h5 className="title-left">{about.title}</h5>
                    </div>
                    <p className="lead">{about.desc}</p>
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
