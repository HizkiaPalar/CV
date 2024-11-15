
import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
const Footer = () => {
  const [footer, setFooter] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const footerRef = ref(db, "footer");
    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      setFooter(data);
    });
  }, []);

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
                        {footer.ty}
                      </p>
                      <ul className="list-ico">
                        <li>
                          <span className="ion-ios-location" /> {footer.location}
                        </li>
                        <li>
                          <span className="ion-ios-telephone" /> {footer.phone}
                        </li>
                        <li>
                          <span className="ion-email" />{" "}
                          {footer.email}
                        </li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul
                        className="d-flex justify-content-center"
                        style={{ marginLeft: "18px" }} 
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
                  © Copyright <strong>HizFOlio</strong>. All Rights Reserved
                </p>
                <div className="credits">
                  Designed by <a href="https://bootstrap.com/">Hizkia Palar</a>
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
