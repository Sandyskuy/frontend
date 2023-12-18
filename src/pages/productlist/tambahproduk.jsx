import React, { useState } from 'react';
import './productlist.css';
import axios from 'axios';
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import Footer from "../../components/Dashboard/Footer/Footer";

function Tambahproduk ()  {
  const [nama, setNama] = useState("");
  const [job, setJob] = useState("");
  const [price, setPrice] = useState("");


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Validate input fields
    if (nama === "" ||  job === "" || price === "") {
    
    alert('Please fill in all fields');
    // return;
    } else {
        
        try {
            await axios.post('http://localhost:8080/insert-data', { 
                nama : nama,
                job : job,
                price : price
            });
            alert('Data added successfully');
            window.location.href = '/Productlist';
        } catch (error) {
    // Handle error jika permintaan POST gagal
            console.error('Error adding data:', error);
            alert('Failed to add data. Please try again.');
        }
    }
};
  return (
      <div>
        <Navbar />
    <form className="product-form" onSubmit={handleFormSubmit}>
        <caption className='table-caption'>Tambah data</caption>
        <div>
            <label className='label-input'>
                Nama Maid:
            </label>
            <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="input-form"
            />
        </div>
        <div>
            <label className='label-input'>
                Job:
            </label>
            <input
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                className="input-form"
            />
        </div>
        <div>
            <label className='label-input'>
                Price:
            </label>
            <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="input-form"
            />
        </div>
      <button type="submit" className="button-list">Tambah Produk</button>
        
    </form>
    <Footer />
    </div>
  );
};

export default Tambahproduk;
