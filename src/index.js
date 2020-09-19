import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "./styles/main.css";

import { Switch, BrowserRouter, Route } from "react-router-dom";

import MovieView from "./components/MovieView";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Favourite from "./components/favourite/Favourite";

const Root = () => {
  return (
    <Provider store={store}>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <NavBar />
            <Switch>
              <Route path="/" exact component={App} />
              <Route path="/movie/:id" component={MovieView} />
              <Route path="/favourite" component={Favourite} />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </Provider>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  document.querySelector("#root")
);
