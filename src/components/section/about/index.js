import React from "react";
import Testimonial2 from "../../../assets/img/testimonial-2.jpg";
const About = () => {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img src={Testimonial2} />
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
                          <span>Hizkapalar294@gmail.com</span>
                        </p>
                        <p>
                          <span className="title-s">Phone: </span>{" "}
                          <span>085255069945</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Skill</p>
                    <span>HTML</span> <span className="pull-right">70%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow={70}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <span>CSS</span> <span className="pull-right">60%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "60%" }}
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <span>JAVASCRIPT</span>{" "}
                    <span className="pull-right">40%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "40%" }}
                        aria-valuenow={40}
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
