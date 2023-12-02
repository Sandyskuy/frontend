import React, { useContext } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { themeContext } from "../../../Context";

const Navbar = () => {

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
              <Link to="/Productlist" className="link">
                Search
              </Link>
            </li>
            <li>
                Order
            </li>
            <li>
                Help
            </li>
            <li className="about">
                About Us
            </li>
          </ul>
        </div>
        <Link to="/login">
        <button className="button n-button">Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
