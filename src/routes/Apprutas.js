import React from 'react'

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


import HomePage from "views/examples/HomePage.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import LoginPage from "views/examples/LoginPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterProdPage from "views/examples/RegisterProdPage";
import RoutePublica from "../routes/RoutePublica";
import RoutePrivada from "../routes/RoutePrivada";



export default function Apprutas () {

  return (
    <div>
       <BrowserRouter>
    <Switch>
    <Route
        exact path="/home-page" component={HomePage}
      />
      <RoutePrivada
        exact path="/landing-page" component={LandingPage} 
      />
      
      <RoutePublica
        exact path="/register-page" component={RegisterPage}  
      />
      <RoutePublica

       exact path="/login-page" component={LoginPage}  
      />
      <RoutePrivada
       exact path="/registerProd-page" component={RegisterProdPage}
      />
     <RoutePrivada
       exact path="/profile-page" component={ProfilePage}
      />
      <Redirect from="/" to="/home-page" />

  

    </Switch>
  </BrowserRouter>,    

    </div>
  )
}


