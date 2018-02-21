import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class AudioPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`GAMES | ${config.siteTitle}`} />
        <About />
      </div>
    );
  }
}

export default AudioPage;
