// Detailmaid.js

import React, { useContext } from "react";
import Navbar from "../../components/Dashboard/NavbarD/NavbarD";
import Footer from "../../components/Dashboard/Footer/Footer";
import { themeContext } from "../../Context";
import "./contact.css";
import Hero from "../../img/hero7.png";
import { MdEmail, MdPhone } from "react-icons/md";
import { faTwitter, faFacebook, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Detailmaid() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="About-us"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <div className="Intro" id="Intro" style={{ background: darkMode ? "black" : "" }}>
        {/* left name side */}
        <div className="i-left">
          <div className="i-name-about">
            <span style={{ color: darkMode ? "white" : "" }}>Contact Us</span>
          </div>
        </div>
        {/* right image side */}
        <div className="i-right">
          <div className="globe">
            <img src={Hero} alt="" />
          </div>
        </div>
      </div>
      {/* Below intro row */}
      <div className="contact-form-row">
      <div className="contact-card">
          <h2 className="contact-title">Contact Us</h2>
          <div className="email-info">
            <span>
              <MdEmail size={20} style={{ marginRight: "8px" }} />
              info@example.com
            </span>
            <span>
              <MdPhone size={20} style={{ marginRight: "8px" }} />
              08674847
            </span>
          </div>
          <div className="social-section">
            <h3 className="contact-title">Social</h3>
            <div className="social-icons">
            <span>
                <FontAwesomeIcon icon={faTwitter} className="icons-item" />
                Twitter
              </span>
              <span>
                <FontAwesomeIcon icon={faFacebook} className="icons-item" />
                Facebook
              </span>
              <span>
                <FontAwesomeIcon icon={faYoutube} className="icons-item" />
                Youtube
              </span>
              <span>
                <FontAwesomeIcon icon={faInstagram} className="icons-item"/>
                Instagram
              </span>
            </div>
          </div>
        </div>
        <div className="contact-form">
        <h2 className="keep-in-touch">Keep in Touch</h2>
            <p className="contact-description">
              We would love to hear from you and answer any questions you may have. You can contact us by filling out the form below, sending us an email, or calling us on our phone number. We will get back to you as soon as possible. You can also follow us on our social media platforms and subscribe to our newsletter to stay updated on our latest news and offers. Thank you for your interest and support.
            </p>

            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" />

              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Subject" />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message"></textarea>

              <button type="submit">Send Message</button>
            </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detailmaid;
