import React from "react";

const Footer = () => {
  return (
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: "url(img/overlay-bg.jpg)" }}
    >
      <div className="overlay-mf" />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf d-flex justify-content-center">
              <div id="contact" className="box-shadow-full text-center">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Thank you for visiting my portfolio! If you’re
                        interested in working together, have questions, or just
                        want to say hello, please feel free to reach out. I'm
                        open to new projects, collaborations, or discussions
                        about my work.
                      </p>
                      <ul className="list-ico">
                        <li>
                          <span className="ion-ios-location" /> Airmadidi,
                          Minahasa Utara, Sulawesi Utara
                        </li>
                        <li>
                          <span className="ion-ios-telephone" /> 085255069945
                        </li>
                        <li>
                          <span className="ion-email" />{" "}
                          Hizkiapalar294@gmail.com
                        </li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul
                        className="d-flex justify-content-center"
                        style={{ marginLeft: "18px" }} // Adjust margin as needed
                      >
                        <li>
                          <a href>
                            <span className="ico-circle">
                              <i className="ion-social-instagram" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href>
                            <span className="ico-circle">
                              <i className="ion-social-linkedin" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href>
                            <span className="ico-circle">
                              <i className="ion-social-github" />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box text-center">
                <p className="copyright">
                  © Copyright <strong>DevFolio</strong>. All Rights Reserved
                </p>
                <div className="credits">
                  Designed by{" "}
                  <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
