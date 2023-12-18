import React from "react";
import { useContext } from "react";
import Navbar from "../../components/Dashboard/NavbarD/NavbarD";
import "../../App.css";
import "../../components/Dashboard/Footer/Footer.css";
import Footer from "../../components/Dashboard/Footer/Footer";
import { themeContext } from "../../Context";
import "./pembayaran.css";
import { Link } from "react-router-dom";

function Pembayaran() {
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
      <div className="pembayaran-container">
        <div className="box-container">
        <div className="address-box">
            <h3>Alamat</h3>
            <p>Jl. Gembira No. 123, Kelurahan Senang, Kecamatan Bahagia, Kota Jakarta Selatan, Provinsi DKI Jakarta, 12345.</p>
        </div>
        </div>
        <div className="separator-line"></div>
        <div className="pembayaran-content">
            <div className="total-amount">
                <p className="amount-text">Jumlah</p>
                <p className="amount-value">Rp. 3.700.000</p>
            </div>
            <div className="order-details">
                <p className="order-text">OrderID</p>
                <p className="order-value">#1345567</p>
            </div>
            <div className="separator-line"></div>
            <div className="nama-details">
                <p className="nama-text">Nama Lengkap</p>
                <p className="nama-value">John Doe</p>
            </div>
            <div className="separator-line"></div>
            <div className="nomor-details">
                <p className="nama-text">Nomor Handphone</p>
                <p className="nama-value">+62343434</p>
            </div>
            <div className="separator-line"></div>
            <div className="email-details">
                <p className="nama-text">Email</p>
                <p className="nama-value">John Doe@gmail.com</p>
            </div>
        </div>
        <div className="metode-pembayaran">
              <p className="metode-title">Metode Pembayaran</p>
              <div className="payment-box">
                <p className="payment-method">ATM/Transfer Bank</p>
                <p className="payment-desc">Bayar dari ATM Anda</p>
              </div>
        </div>
        <Link to="/Done">
        <button className="bayar-button">Bayar</button>            
        </Link>
    </div>
      <Footer />
    </div>
  );
}

export default Pembayaran;
