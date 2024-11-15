import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
const Portfolio = () => {
  const [portfolio, setPortfolio] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const portfolioRef = ref(db, "portfolio");
    onValue(portfolioRef, (snapshot) => {
      const data = snapshot.val();
      setPortfolio(data);
    });
  }, []);
  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Certificate</h3>

              <div className="line-mf" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="work-box">
              <a href="img/work-1.jpg" data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src={portfolio.image2 || ""} />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">{portfolio.skill1}</h2>
                      <div className="w-more">
                        <span className="w-ctegory">{portfolio.company1}</span>{" "}
                        / <span className="w-date">{portfolio.date1}</span>
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
                  <img src={portfolio.image1 || ""} />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">{portfolio.skill2}</h2>
                      <div className="w-more">
                        <span className="w-ctegory">{portfolio.company2}</span>{" "}
                        / <span className="w-date">{portfolio.date2}</span>
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
                  <img src={portfolio.image3 || ""} />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">{portfolio.skill3}</h2>
                      <div className="w-more">
                        <span className="w-ctegory">{portfolio.company3}</span>{" "}
                        / <span className="w-date">{portfolio.date3}</span>
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
