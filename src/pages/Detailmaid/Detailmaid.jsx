import React from "react";
import { useContext } from "react";
import Navbar from "../../components/Dashboard/NavbarD/NavbarD";
import "../../App.css";
import "../../components/Dashboard/Footer/Footer.css";
import Footer from "../../components/Dashboard/Footer/Footer";
import { themeContext } from "../../Context";
import "./Detailmaid.css";
import Avatar1 from "../../img/profile1.jpg";
import Cover from "../../img/ecommerce.png";
import { Link } from "react-router-dom";

function Detailmaid() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="Detail-maid"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <div className="cover-photo">
          <img
            src={Cover}
            alt="Cover"
            style={{
              width: "100%",
              height: "200px", // Adjust the height as needed
              objectFit: "cover",
            }}
          />

          <div className="profile-picture-container">
            <img
            src={Avatar1}
            alt="Profile"
            className="profile-picture"
            />
          </div>
        </div>
        <div className="profile-infos">
          <h2>John Doe</h2>
          <p className="job-profile">Butler</p>
          <p className="price-profile">Rp. 10.000.000</p>
        </div>
        <div className="button-container">
          <button className="chat-button">Chat</button>
          <Link to="/Pembayaran">
            <button className="order-button">Order</button>
          </Link>
        </div>
        <div className="maid-detail">
          <div className="about-me-container">
            <h2>About Me</h2>
            <p>
              Halo, saya John Doe. Saya adalah seorang pembantu yang berdedikasi dan memiliki pengalaman dalam memberikan layanan kebersihan dan perawatan rumah tangga. Saya percaya bahwa kebersihan adalah kunci untuk menciptakan lingkungan yang nyaman dan sehat. Saya memiliki keahlian dalam tugas-tugas seperti membersihkan, mencuci, menyetrika, dan merawat rumah. Saya sangat memperhatikan detail dan selalu berusaha memberikan hasil terbaik dalam setiap pekerjaan yang saya lakukan.
            </p>
          </div>
          <div className="biodata-container">
            <h2>Biodata</h2>
            <ul>
              <li>Nama: John Doe</li>
              <li>Umur: 33 Tahun</li>
              <li>Tanggal Lahir: 08 Oktober 1999</li>
              <li>Kewarganegaraan: Indonesia</li>
              <li>Status: Kawin</li>
              <li>Pengalaman Kerja: PDF</li>
            </ul>
          </div>
          <div className="job-container">
            <h2>Job</h2>
            <ul>
              <li>Pelayanan Tamu</li>
              <li>Penyajian Makanan dan Minuman</li>
              <li>Merawat Perabotan dan Perhiasan</li>
              <li>Perawatan Gudang dan Pakaian</li>
              <li>Manajemen Rumah Tangga</li>
              <li>Merawat Rumah</li>
            </ul>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default Detailmaid;
