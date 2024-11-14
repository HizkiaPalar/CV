import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
const Home = ({ backgroundImage }) => {
  const [home, setHome] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const homeRef = ref(db, "home");
    onValue(homeRef, (snapshot) => {
      const data = snapshot.val();
      setHome(data);
    });
  }, []);
  return (
    <div
      id="home"
      className="intro route bg-image"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay-itro" />
      <div className="intro-content display-table fade-in">
        <div className="table-cell">
          <div className="container">
            <h1 className="intro-title mb-4">{home.title}</h1>
            <p className="intro-subtitle">
              <span className="text-slider-items">{home.subtitle}</span>
              <strong className="text-slider" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
