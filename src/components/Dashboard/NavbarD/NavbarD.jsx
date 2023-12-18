import React, { useContext } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { themeContext } from "../../../Context";
import Avatar from "../../../img/Avatar.png";

const NavbarD = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-names" style={{color: darkMode ? "white" : "" }}>MyMaids</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list" >
          <ul style={{ listStyleType: "none", color: darkMode ? "white" : "" }}>
            <li>
              <Link to = "/" className="link">
                Home
              </Link>
            </li>
            <li>
            <Link to="/Search" className="link">
                Search
            </Link>
            </li>
            <Link to="/Contact" className="link">
                Contact
            </Link>
            <Link to="/Aboutus" className="link">
            <li className="about">
                About Us
            </li>
            </Link>
          </ul>
        </div>
        <img src={Avatar} alt="Avatar" className="avatar-icon" />
      </div>
    </div>
  );
};

export default NavbarD;
