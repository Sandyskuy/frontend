import React, { useContext } from "react";
import { themeContext } from "../../../Context";
import "./Experience.css";
import image from "../../../img/mantabkang.jpg";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="about-section">
      <h2 className="about-title">Join a Partner with Us</h2>
      <div className="overlap-group">
        <div className="content-about">
          <img className="img" alt="Rectangle" src={image} />
          <div className="text">
            <div className="text-title">Why Partner with Us?</div>
            <div className="text-lists">
              <div className="list-column">
                {/* Left column */}
                <div className="list-1">
                  <div className="text-wrapper">Kemudahan Pemesanan
                  <i className="fa fa-check-circle icon"></i>
                  </div>
                </div>
                <div className="list-2">
                  <div className="text-wrapper">Keamanan Terjamin
                  <i className="fa fa-check-circle icon"></i>
                  </div>
                </div>
                <div className="list-3">
                  <div className="text-wrapper">Keamanan Terjamin
                  <i className="fa fa-check-circle icon"></i>
                  </div>
                </div>
                <div className="list-4">
                  <div className="text-wrapper">Keamanan Terjamin
                  <i className="fa fa-check-circle icon"></i>
                  </div>
                </div>
              </div>
              <div className="list-column">
                {/* Right column */}
                <div className="list-5">
                  <div className="text-wrapper">Keamanan Terjamin
                  <i className="fa fa-check-circle icon"></i>
                  </div>
                </div>
                <div className="list-6">
                  <div className="text-wrapper">Maid Terpercaya
                  <i className="fa fa-check-circle icon"></i>
                  </div>
                </div>
                <div className="list-7">
                  <div className="text-wrapper">Maid Terpercaya
                  <i className="fa fa-check-circle icon"></i>
                  </div>
                </div>
                <div className="list-8">
                  <div className="text-wrapper">Maid Terpercaya
                  <i className="fa fa-check-circle icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
