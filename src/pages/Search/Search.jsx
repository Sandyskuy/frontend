import React from "react";
import { useState } from "react";
import Navbar from "../../components/Dashboard/NavbarD/NavbarD";
import Intro from "../../components/Dashboard/Intro/Intro";
import Card from "../../components/Dashboard/Card/Card"
import "../../App.css";
import "../../components/Dashboard/Footer/Footer.css"
import Footer from "../../components/Dashboard/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "../../Context";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Avatar1 from "../../img/profile1.jpg"


function Search() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
        <Navbar />
        <Intro />
        <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`search-bar ${darkMode ? "dark-mode" : ""}`}
        />

        {/* Filter options */}
        <div className="filter-container">
          <FontAwesomeIcon icon={faFilter} className="filter-icon" />
          {/* Add additional filter components and logic here */}
        </div>
      </div>
      
        <h2 className="card-titles title-search">Rekomendasi</h2>
        <Card />
        <table className={`custom-table ${darkMode ? "dark-mode" : ""}`}>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="profile-info">
                <img className="profile-img-round" src={Avatar1}/>
                <div className="profile-details">
                  <p className="profile-name">John Doe</p>
                  <p className="profile-job">Butler</p>
                  <p className="profile-location">City, Country</p>
                  <p className="profile-exp">Experience: 5 years</p>
                </div>
              </div>
            </td>
            <td>+1234567890</td>
            <td>Rp. 10.000.000</td>
          </tr>
          <tr>
            <td>
              <div className="profile-info">
                <img className="profile-img-round" src={Avatar1}/>
                <div className="profile-details">
                  <p className="profile-name">John Doe</p>
                  <p className="profile-job">Butler</p>
                  <p className="profile-location">City, Country</p>
                  <p className="profile-exp">Experience: 5 years</p>
                </div>
              </div>
            </td>
            <td>+1234567890</td>
            <td>Rp. 10.000.000</td>
          </tr>
          <tr>
            <td>
              <div className="profile-info">
                <img className="profile-img-round" src={Avatar1}/>
                <div className="profile-details">
                  <p className="profile-name">John Doe</p>
                  <p className="profile-job">Butler</p>
                  <p className="profile-location">City, Country</p>
                  <p className="profile-exp">Experience: 5 years</p>
                </div>
              </div>
            </td>
            <td>+1234567890</td>
            <td>Rp. 10.000.000</td>
          </tr>
        </tbody>
      </table>
        <Footer />
    </div>
  );
}

export default Search;