import React from "react";
import Navbar from "../components/Dashboard/Navbar/Navbar";
import Intro from "../components/Dashboard/Intro/Intro";
import Services from "../components/Dashboard/Services/Services";
import Card from "../components/Dashboard/Card/Card"
import "../App.css";
import "../components/Dashboard/Footer/Footer.css"
import Footer from "../components/Dashboard/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "../Context";

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
        <Card />
        <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>
        <Footer />
    </div>
  );
}

export default Dashboard;
