import React from "react";

const Home = () => {
  return (
    <div
      id="home"
      className="intro route bg-image"
      style={{ backgroundImage: "url(img/intro-bg.jpg)" }}
    >
      <div className="overlay-itro" />
      <div className="intro-content display-table fade-in">
        <div className="table-cell">
          <div className="container">
            <h1 className="intro-title mb-4">I am Hizkia Jonathan Palar</h1>
            <p className="intro-subtitle">
              <span className="text-slider-items">
                I'm interested in Front-End Development
              </span>
              <strong className="text-slider" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
