import React, { useContext } from "react";
import "./Intro.css";
import Hero from "../../../img/hero7.png";
import { themeContext } from "../../../Context";

const Intro = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro" style={{ background: darkMode ? "black" : "" }} >
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>MyMaids</span>
          <span style={{ color: darkMode ? "white" : "" }}>Temukan Maid yang Tepat untuk Membantu Anda dalam Rutinitas Harian Anda.</span>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <div className="globe">
          <img src={Hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
