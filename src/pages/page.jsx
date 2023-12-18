import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "../components/Dashboard/login/login"
import Register from "../components/Dashboard/login/Register"
import Productlist from "./productlist/productlist";
import Landing from "./Landing";
import Search from "./Search/Search"
import "../App.css";
import Tambahproduk from "./productlist/tambahproduk";
import Detailmaid from "./Detailmaid/Detailmaid";
import Aboutus from "./Aboutus/aboutus";
import Pembayaran from "./pembayaran/pembayaran";
import Done from "./Done/done";
import Editproduk from "./productlist/editproduk";
import Contact from "./Contact/contact";

const Pages = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/Register' component={Register} />
          <Route exact path='/Dashboard' component={Dashboard} />
          <Route exact path='/Productlist' component={Productlist} />
          <Route exact path='/Search' component={Search} />
          <Route exact path='/Tambahproduk' component={Tambahproduk} />
          <Route exact path='/Detailmaid' component={Detailmaid} />  
          <Route exact path='/Aboutus' component={Aboutus} />         
          <Route exact path='/Pembayaran' component={Pembayaran} />   
          <Route exact path='/Done' component={Done} /> 
          <Route exact path='/Editproduk/:id' component={Editproduk} />  
          <Route exact path='/Contact' component={Contact} />  
        </Switch>
      </Router>
    </>
  )
}

export default Pages