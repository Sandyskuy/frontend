import React from "react";
import "./Card.css";
import Profile from "../../../img/profile1.jpg";
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

const Card = () => {  
  return (
    <div className="card-section">
      <div className="card-container">
        <div className="card">
          <img src={Profile} className="card-img-top" alt="Profile" />
          <div className="card-body">
            <h5 className="card-title">John Doe</h5>
            <p className="card-job">Butler</p>
            <hr className="job-line" />
            <Link to = "/Detailmaid">
            <p className="view-link">
                View <i className="fa fa-arrow-right"></i>
            </p>
            </Link>
          </div>
        </div>
        <div className="card">
          <img src={Profile} className="card-img-top" alt="Profile" />
          <div className="card-body">
            <h5 className="card-title">John Doe</h5>
            <p className="card-job">Butler</p>
            <hr className="job-line" />
            <Link to = "/Detailmaid">
            <p className="view-link">
                View <i className="fa fa-arrow-right"></i>
            </p>
            </Link>
          </div>
        </div>
        <div className="card">
          <img src={Profile} className="card-img-top" alt="Profile" />
          <div className="card-body">
            <h5 className="card-title">John Doe</h5>
            <p className="card-job">Butler</p>
            <hr className="job-line" />
            <Link to = "/Detailmaid">
            <p className="view-link">
                View <i className="fa fa-arrow-right"></i>
            </p>
            </Link>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Card;
