import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import About from "components/About";
// views without layouts
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
  <IndexNavbar/>
    <Switch>
      {/* add routes with layouts */}
      {/* <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} /> */}
      {/* add routes without layouts */}
      {/* <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} /> */}
      <Route path="/" exact component={Index} />
      <Route path="/About" exact component={About} />

      {/* add redirect for first page */}
      {/* <Redirect from="*" to="/" /> */}
    </Switch>  <Footer/>

  </BrowserRouter>,
  document.getElementById("root")
);
