import React, {useEffect, useState} from "react";
import { getDatabase, ref, onValue } from "firebase/database";
const Interest = () => {
  const [interest, setInterest] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const interestRef = ref(db, "interest");
    onValue(interestRef, (snapshot) => {
      const data = snapshot.val();
      setInterest(data);
    });
  }, []);
  return (
    <section id="service" className="services-mf route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Soft Skills</h3>
              
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
                <h2 className="s-title">{interest.skill1}</h2>
                <p className="s-description text-center">
                  {interest.desc1}
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
                <h2 className="s-title">{interest.skill2}</h2>
                <p className="s-description text-center">
                  {interest.desc2}
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
                <h2 className="s-title">{interest.skill3}</h2>
                <p className="s-description text-center">
                  {interest.desc3}
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
