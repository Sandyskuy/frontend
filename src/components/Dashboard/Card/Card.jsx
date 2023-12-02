import React from "react";
import "./Card.css";
import Profile from "../../../img/profile1.jpg";

const Card = () => {
  return (
    <div className="card-section">
      <h2 className="card-titles">Temukan Maid Mu</h2>
      <div className="card-container">
        <div className="card">
          <img src={Profile} className="card-img-top" alt="Profile" />
          <div className="card-body">
            <h5 className="card-title">John Doe</h5>
            <p className="card-job">Butler</p>
            <hr className="job-line" />
          </div>
        </div>
        <div className="card">
          <img src={Profile} className="card-img-top" alt="Profile" />
          <div className="card-body">
            <h5 className="card-title">John Doe</h5>
            <p className="card-job">Butler</p>
          </div>
        </div>
        <div className="card">
          <img src={Profile} className="card-img-top" alt="Profile" />
          <div className="card-body">
            <h5 className="card-title">John Doe</h5>
            <p className="card-job">Butler</p>
          </div>
        </div>
        <div className="card">
          <img src={Profile} className="card-img-top" alt="Profile" />
          <div className="card-body">
            <h5 className="card-title">John Doe</h5>
            <p className="card-job">Butler</p>
          </div>
        </div>
        <div className="card">
          <img src={Profile} className="card-img-top" alt="Profile" />
          <div className="card-body">
            <h5 className="card-title">John Doe</h5>
            <p className="card-job">Butler</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
