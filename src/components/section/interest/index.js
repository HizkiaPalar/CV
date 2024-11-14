import React from "react";

const Interest = () => {
  return (
    <section id="service" className="services-mf route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Soft Skills</h3>
              <p className="subtitle-a">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="line-mf" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="ion-monitor" />
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">UI/UX Design</h2>
                <p className="s-description text-center">
                  Passionate about UI/UX design, focusing on creating intuitive
                  and visually appealing user experiences. Skilled in
                  understanding user needs, analyzing feedback, and translating
                  insights into effective design solutions. Committed to
                  enhancing usability and delivering seamless, engaging digital
                  interfaces.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="ion-code-working" />
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Front-end Development</h2>
                <p className="s-description text-center">
                  Interested in front-end development, focusing on creating
                  responsive and dynamic user interfaces. Skilled in optimizing
                  user experience through the use of HTML, CSS, and JavaScript,
                  with attention to detail in both design and functionality.
                  Committed to delivering fast, intuitive, and visually
                  appealing web applications.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="ion-android-phone-portrait" />
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Mobile app development</h2>
                <p className="s-description text-center">
                  Interested in mobile app development, focusing on creating
                  user-friendly and high-performance mobile applications.
                  Skilled in designing intuitive interfaces and optimizing
                  functionality for mobile platforms, with a strong emphasis on
                  usability and responsiveness. Committed to delivering
                  seamless, engaging app experiences that meet user needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interest;
