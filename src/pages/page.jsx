import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "../components/Dashboard/login/login"
import Register from "../components/Dashboard/login/Register"
import Productlist from "./productlist/productlist";
import "../App.css";

const Pages = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/Register' component={Register} />
          <Route exact path='/Productlist' component={Productlist} />
        </Switch>
      </Router>
    </>
  )
}

export default Pages