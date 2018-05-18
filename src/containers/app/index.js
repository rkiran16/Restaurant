import React from "react";
import { Route, Link } from "react-router-dom";
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
    <Route exact path="/online-restaurant" component={Home} />
    <Route exact path="/online-restaurant/about" component={About} />
    <Route exact path="/online-restaurant/menu" component={Menu} />
    <Route exact path="/online-restaurant/location" component={Location} />
    <Route exact path="/online-restaurant/catering" component={Catering} />
    <CopyRight />
  </main>
);

export default App;
