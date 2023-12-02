import React, { useContext } from "react";
import "./Services.css";
import { themeContext } from "../../../Context";
import maid from "../../../img/maid.png";
import babysiter from "../../../img/babysitter.png";
import driver from "../../../img/driver.png"
import butler from "../../../img/butler.png";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="job">
      <div className="box">
        <img src={maid} alt="Gambar 1" />
      </div>
      <div className="box">
        <img src={babysiter} alt="Gambar 2" />
      </div>
      <div className="box">
        <img src={driver} alt="Gambar 3" />
      </div>
      <div className="box">
        <img src={butler} alt="Gambar 4" />
      </div>
    </div>
  );
};

export default Services;
