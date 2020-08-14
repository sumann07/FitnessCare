import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import "./styles.css";
import Home from "./Home";
import About from "./About";
import Navbar from "./NavBar";
import Service from "./Service";

import { Route, Redirect, Switch } from "@zumper/react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/login" component={Service} />

        <Redirect to="/" />
      </Switch>
    </>
  );
}
