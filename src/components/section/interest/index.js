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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  adipisci eaque autem fugiat! Quia, provident vitae! Magni
                  tempora perferendis eum non provident.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  adipisci eaque autem fugiat! Quia, provident vitae! Magni
                  tempora perferendis eum non provident.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  adipisci eaque autem fugiat! Quia, provident vitae! Magni
                  tempora perferendis eum non provident.
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
