import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../home";
import Menu from "../menu";
import Location from "../location";
import Header from "../../components/Header/header";
import Catering from "../catering";

const App = () => (
  <main>
    <Header />
    <Route exact path="/" component={Home} />
    <Route exact path="/online-restaurant" component={Home} />
    <Route exact path="/menu" component={Menu} />
    <Route exact path="/location" component={Location} />
    <Route exact path="/catering" component={Catering} />
  </main>
);

export default App;
