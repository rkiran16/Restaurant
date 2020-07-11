import React from "react";
import { Route } from "react-router-dom";
import Home from "../home";
import Menu from "../menu";
import About from "../about";
import Location from "../location";
import Header from "../../components/Header/header";
import Catering from "../catering";
import CopyRight from "../../components/footer/copyright";
import Logo from "../../components/Logo/logo";

const App = () => (
  <main>
    <Header />
    <Logo />
    <Route exact path="/" component={Home} />
    <Route exact path="/restaurant" component={Home} />
    <Route exact path="/restaurant/about" component={About} />
    <Route exact path="/restaurant/menu" component={Menu} />
    <Route exact path="/restaurant/location" component={Location} />
    <Route exact path="/restaurant/catering" component={Catering} />
    <CopyRight />
  </main>
);

export default App;
