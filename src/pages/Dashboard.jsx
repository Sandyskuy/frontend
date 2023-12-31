import React from "react";
import Navbar from "../components/Dashboard/NavbarD/NavbarD";
import Intro from "../components/Dashboard/Intro/Intro";
import Services from "../components/Dashboard/Services/Services";
import Card from "../components/Dashboard/Card/Card"
import "../App.css";
import "../components/Dashboard/Footer/Footer.css"
import Footer from "../components/Dashboard/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "../Context";
import Experience from "../components/Dashboard/Experience/Experience";
import { Link } from "react-router-dom";

function Dashboard() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
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
        <Services />
        <h2 className="card-titles">Temukan Maid Mu</h2>
        <Card />
        <Card />
        <Experience />
        <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <Link to="/Productlist">
            <button className='btn5'>Contact Us Today</button>
            </Link>
          </div>
        </div>
      </section>
        <Footer />
    </div>
  );
}

export default Dashboard;
