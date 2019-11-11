import React, { Component } from "react";
import logo from "./logo.svg";
// import "./App.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

class App extends Component {
  render() {
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <img src={logo} className="App-logo" alt="logo" width="56px" />
            <Typography variant="h6" noWrap color="inherit">
              Digital Business Solutions
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          Digital business models have completely transformed music, newspapers,
          and ticket booking. While finance, retail, and movies are in the early
          stages of transformation, most business leaders agree that every
          industry will eventually be impacted. Digital transformation is driven
          by a set of principles and frameworks. Once these principles and
          frameworks are understood, they can be applied to any business. For
          example, participants will learn the framework for the mediation of
          digital platforms, which can then be applied to food delivery and to
          private jet rentals.
        </div>
        <div>
          Digital business models have completely transformed music, newspapers,
          and ticket booking. While finance, retail, and movies are in the early
          stages of transformation, most business leaders agree that every
          industry will eventually be impacted. Digital transformation is driven
          by a set of principles and frameworks. Once these principles and
          frameworks are understood, they can be applied to any business. For
          example, participants will learn the framework for the mediation of
          digital platforms, which can then be applied to food delivery and to
          private jet rentals.
        </div>
        <div>
          Digital business models have completely transformed music, newspapers,
          and ticket booking. While finance, retail, and movies are in the early
          stages of transformation, most business leaders agree that every
          industry will eventually be impacted. Digital transformation is driven
          by a set of principles and frameworks. Once these principles and
          frameworks are understood, they can be applied to any business. For
          example, participants will learn the framework for the mediation of
          digital platforms, which can then be applied to food delivery and to
          private jet rentals.
        </div>
        <div>
          Digital business models have completely transformed music, newspapers,
          and ticket booking. While finance, retail, and movies are in the early
          stages of transformation, most business leaders agree that every
          industry will eventually be impacted. Digital transformation is driven
          by a set of principles and frameworks. Once these principles and
          frameworks are understood, they can be applied to any business. For
          example, participants will learn the framework for the mediation of
          digital platforms, which can then be applied to food delivery and to
          private jet rentals.
        </div>
        <div>
          Digital business models have completely transformed music, newspapers,
          and ticket booking. While finance, retail, and movies are in the early
          stages of transformation, most business leaders agree that every
          industry will eventually be impacted. Digital transformation is driven
          by a set of principles and frameworks. Once these principles and
          frameworks are understood, they can be applied to any business. For
          example, participants will learn the framework for the mediation of
          digital platforms, which can then be applied to food delivery and to
          private jet rentals.
        </div>
      </>
    );
  }
}

export default App;
