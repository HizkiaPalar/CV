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
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis dolorum dolorem soluta quidem expedita aperiam
                        aliquid at. Totam magni ipsum suscipit amet? Autem nemo
                        esse laboriosam ratione nobis mollitia inventore?
                      </p>
                      <ul className="list-ico">
                        <li>
                          <span className="ion-ios-location" /> 329 WASHINGTON
                          ST BOSTON, MA 02108
                        </li>
                        <li>
                          <span className="ion-ios-telephone" /> (617) 557-0089
                        </li>
                        <li>
                          <span className="ion-email" /> contact@example.com
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
                              <i className="ion-social-facebook" />
                            </span>
                          </a>
                        </li>
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
                              <i className="ion-social-twitter" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href>
                            <span className="ico-circle">
                              <i className="ion-social-pinterest" />
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
