import React, { Component } from "react";
import config from "../../../data/SiteConfig";
import "./StaticLink.css";
import Link from "gatsby-link";

class StaticLink extends Component {

  render() {
    const { text, url } = this.props;
    if (text && url) {
      return (
      <span className="link-button">
      <a href={url}>{text}</a>

     
      </span>
    )
      
    }
    return null;
  }
}
export default StaticLink;
