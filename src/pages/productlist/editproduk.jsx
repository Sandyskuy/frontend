import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Dashboard/NavbarD/NavbarD';
import {Prompt} from 'react-router-dom';
import Footer from '../../components/Dashboard/Footer/Footer'

const Editproduk = ({ match }) => {
  const dataId = match.params.id;
  const [formData, setFormData] = useState({
    nama: '',
    job: '',
    price: '',
  });
  const [nama, setNama] = useState("");
  const [job, setJob] = useState("");
  const [price, setPrice] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isBlocking, setIsBlocking] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setIsBlocking(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  
    setLoading(true);

    try{
      await axios.put(`http://localhost:8080/update-data/${dataId}`, formData);
      alert('Data updated succesfully');
      setShow(false);
      setIsBlocking(false);
    } catch (error) {
      setError('Error Updateing Data');
  } finally {
    setLoading(false);
  }
  };

  const CloseModal = () => {
    setNama("");
    setJob("");
    setPrice("");
    setShow(false);
    setError(null);
  };

  return (
    <div show= {show} onHide={CloseModal}>
      <Prompt when={isBlocking} message="You have unsaved changes. Are you want to leave" />
    <Navbar />
    <form className="product-form" onSubmit={handleSubmit}>
    <caption className='table-caption'>Edit</caption>
    <div>
        <label className='label-input'>
            Nama Maid:
        </label>
        <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            className="input-form"
        />
    </div>
    <div>
        <label className='label-input'>
            Job:
        </label>
        <input
            type="text"
            name="job"
            value={formData.job}
            onChange={handleChange}
            className="input-form"
        />
    </div>
    <div>
        <label className='label-input'>
            Price:
        </label>
        <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="input-form"
        />
    </div>
  <button type="submit" className="button-list" disabled={loading}>
    {loading ? 'updating...' : 'Update Data'}  
  </button>
  {error && <p className='text-error'>{error}</p>}
</form>
<Footer />
</div>
);
};

export default Editproduk;