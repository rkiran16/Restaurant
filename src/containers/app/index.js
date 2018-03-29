import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../home";
import About from "../about";
import Menu from "../menu";
import Footer from "../../components/footer/footer";
import Header from "../../components/Header/header";

const App = () => (
  <main>
    <Header />
    <Route exact path="/" component={Home} />
    <Route exact path="/about-us" component={About} />
    <Route exact path="/menu" component={Menu} />
    <Footer />
  </main>
);

export default App;
