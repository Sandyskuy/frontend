import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import "./productlist.css";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import Footer from "../../components/Dashboard/Footer/Footer";
import "../../App.css";
import { themeContext } from "../../Context";

const ProductList = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [data, setData] = useState([]);
    
    useEffect(() => {
        getData();
    },[]);

    const getData = async() => {
        try {
            const data = await axios.get('http://localhost:8080/data');
            console.log('Data Maid:', data.data);
            setData(data.data);
        } catch (error){
            console.error('Kesalahan mengambil data maid:', error);
        }
    };

    const deleteData = async(id) => {
        try{
            await axios.delete('http://localhost:8080/data/${id}');
            getData();
        } catch (error){
            console.error('Error Deleting Maid:', error);
        }
    };

    return(
        <div className='App' >
            <Navbar />
            <div className='product-list'>

            <table className='table-container'>
                <caption className='table-caption'>Data Maid</caption>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Job</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { data.length > 0 ? (
                        data.map((data, index) => (
                            <tr key={data.id}>
                                <td>{index + 1}</td>
                                <td>{data.nama}</td>
                                <td>{data.job}</td>
                                <td>{data.price}</td>
                                <td>
                                    <button className='button-list'>Edit</button>
                                    <button className='button-list' onClick={() => deleteData(data.id)}>Hapus</button>
                                </td>
                            </tr>
                        ))) : (
                            <tr>
                                <td colSpan= "5">No Data Available</td>
                            </tr>
                        )  }                      
                </tbody>
            </table>
        </div>
            <Footer />
        </div>
    )
}

export default ProductList;