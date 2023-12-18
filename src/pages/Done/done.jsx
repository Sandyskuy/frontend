// Selesai.js

import React, { useContext } from "react";
import Navbar from "../../components/Dashboard/NavbarD/NavbarD";
import Footer from "../../components/Dashboard/Footer/Footer";
import { themeContext } from "../../Context";
import { FaCheckCircle } from "react-icons/fa"; // Import the checkmark icon
import "./done.css"; // Create a CSS file for styling if needed
import { Link } from "react-router-dom";

function Done() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <div className="selesai-container">
        <FaCheckCircle className="checkmark-icon" />
        <h1>Pembayaran Selesai</h1>
        <Link to="/Dashboard">
        <button className="kembali-button">
          Kembali
        </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Done;
