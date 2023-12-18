import React from "react";
import { useContext } from "react";
import Navbar from "../../components/Dashboard/NavbarD/NavbarD";
import "../../App.css";
import "../../components/Dashboard/Footer/Footer.css";
import Footer from "../../components/Dashboard/Footer/Footer";
import { themeContext } from "../../Context";
import "./aboutus.css";
import Hero from "../../img/hero7.png";
import { mdiNumeric1BoxMultipleOutline } from '@mdi/js';
import { mdiNumeric2BoxMultipleOutline } from '@mdi/js';
import { mdiNumeric3BoxMultipleOutline } from '@mdi/js';
import { mdiNumeric4BoxMultipleOutline } from '@mdi/js';
import Icon from '@mdi/react';

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
      <div className="Intro" id="Intro" style={{ background: darkMode ? "black" : "" }} >
      {/* left name side */}
      <div className="i-left">
        <div className="i-name-about">
          <span style={{ color: darkMode ? "white" : "" }}>About Us</span>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <div className="globe">
          <img src={Hero} alt="" />
        </div>
      </div>
    </div>
        <div className="aboutus-detail">
          <div className="our-vm">
            <h2>Our Vision</h2>
            <p>
            menjadi platform terdepan yang menyediakan solusi inovatif, handal, dan aman untuk pemesanan asisten rumah tangga, memenuhi kebutuhan rumah tangga modern.
            </p>
          </div>
          <div className="our-vm">
            <h2>Our Mission</h2>
            <p>
            Misi kami melibatkan upaya untuk memberikan akses mudah kepada pelanggan, memastikan bahwa mereka dapat dengan mudah menemukan, memesan, dan mengelola jadwal asisten rumah tangga sesuai kebutuhan mereka. Kami berkomitmen untuk menyediakan asisten berkualitas tinggi melalui proses seleksi ketat, pelatihan komprehensif, dan umpan balik pelanggan yang terus menerus.
            </p>
          </div>
          <div className="timeline-container">
            <div className="timeline-content">
                <h2>
                <Icon path={mdiNumeric1BoxMultipleOutline} size={1} /> 2023
                </h2>
                <p>
                    Mencetuskan ide pembuatan platform MyMaids sebagai solusi untuk mewadahi para pekerja rumah tangga dan memenuhi kebutuhan rumah tangga modern.
                </p>
            </div>
            <div className="timeline-content">
                <h2>
                <Icon path={mdiNumeric2BoxMultipleOutline} size={1} /> 2024
                </h2>
                <ul>
                    <li>Menjalin kemitraan awal dengan lembaga pelatihan untuk asisten rumah tangga.</li>
                    <li>Deskripsi atau informasi tambahan mengenai kemitraan dengan lembaga pelatihan.</li>
                </ul>
            </div>
            <div className="timeline-content">
                <h2>
                <Icon path={mdiNumeric3BoxMultipleOutline} size={1} /> 2025
                </h2>
                <ul>
                    <li>Melakukan kampanye pemasaran yang lebih luas untuk meningkatkan pangsa pasar.</li>
                    <li>Menjalin kemitraan strategis dengan agensi penyalur pekerja rumah tangga.</li>
                </ul>
            </div>
            <div className="timeline-content">
                <h2>
                <Icon path={mdiNumeric4BoxMultipleOutline} size={1} /> 2026
                </h2>
                <ul>
                    <li>Meningkatkan fungsionalitas platform dengan solusi kecerdasan buatan untuk pencocokan yang lebih akurat antara pelanggan dan asisten rumah tangga.</li>
                    <li>Memperluas layanan ke pasar internasional.</li>
                </ul>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default Detailmaid;
