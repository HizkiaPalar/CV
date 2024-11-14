import React from "react";
import Certi3 from "../../../assets/img/certi3.JPG";
import Certi2 from "../../../assets/img/certi2.jpg";
import Certi4 from "../../../assets/img/certi4.JPG";
const Portfolio = () => {
  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Certificate</h3>
              <p className="subtitle-a">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="line-mf" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="work-box">
              <a href="img/work-1.jpg" data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src={Certi4} alt className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Web Development Bootcamp</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Udemy</span> /{" "}
                        <span className="w-date">4 Aug. 2024</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="img/work-2.jpg" data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src={Certi2} />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">UI/UX Bootcamp</h2>
                      <div className="w-more">
                        <span className="w-ctegory">HabisKerja.com</span> /{" "}
                        <span className="w-date">4 Aug. 2024</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="img/work-3.jpg" data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src={Certi3} alt className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Mobile App Development</h2>
                      <div className="w-more">
                        <span className="w-ctegory">PROXOCORIS</span> /{" "}
                        <span className="w-date">18 Sep. 2018</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
