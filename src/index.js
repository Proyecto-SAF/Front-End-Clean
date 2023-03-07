import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Pdf from "components/Funcionales/PdfView.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import SignUpPage from "./views/examples/SignUp.js";
import HomePage from "views/examples/HomePage";
import CatalogoPage from "views/examples/CatalogoPage.js";
import Catalogo2Page from "views/examples/Catalogo2Page.js";
import RecetariosPage from "views/examples/RecetariosPage.js";
import ProfileAdminPage from "views/examples/ProfileAdminPage.js";
import NoticiasPage from "views/examples/NoticiasPage.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
         <Route
          path="/home-page"
          render={(props) => <HomePage {...props} />}
        />
        <Route
          path="/recetarios-page"
          render={(props) => <RecetariosPage {...props} />}
        />
         <Route
          path="/catalogo-page"
          render={(props) => <CatalogoPage {...props} />}
        />
         <Route
          path="/catalogo2-page"
          render={(props) => <Catalogo2Page {...props} />}
        />
        <Route
          path="/pdf-page/:urlpdf"
          render={(props) => <Pdf {...props} />}
        />
        <Route
          path="/profilead-page"
          render={(props) => <ProfileAdminPage {...props} />}
        />
        <Route
          path="/verNoticias"
          render={(props) => <NoticiasPage {...props} />}
        />
        <Route
          path="/SignUp-page"
          render={(props) => <SignUpPage {...props} />}
        />
        <Route
          path="/login-page"
          render={(props) => <LoginPage {...props} />}
        />
        <Redirect to="/landing-page" />
        <Redirect from="/" to="/landing-page" />
      </Switch>
    </Switch>
  </BrowserRouter>
);
