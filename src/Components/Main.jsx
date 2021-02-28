import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Projects from "./Projects/Projects";
import ContactForm from "./ContactForm";
import Resume from "./Resume";
import HomePage from "./Home/HomePage";
import Hex from "./Projects/Hex";
import WundrCommunity from "./Projects/WundrCommunity";
import WundrCreator from "./Projects/WundrCreator";
import ScrollToTop from "./ScrollToTop";

function Main() {
  return (
    <main>
      <Fragment>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={ContactForm} />
          <Route path="/hex" component={Hex} />
          <Route path="/wundr-community" component={WundrCommunity} />
          <Route path="/wundr-creator" component={WundrCreator} />
        </Switch>
      </Fragment>
    </main>
  );
}

export default Main;
