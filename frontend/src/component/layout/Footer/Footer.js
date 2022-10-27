import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import { FaGithub } from "react-icons/fa"
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <Link to="/contact">CONTACT US</Link>
      </div>

      <div className="midFooter">
      {/* <img src="Kartify.png" alt="Kartify" style="width:10px;height:10px;"></img> */}
        <h1>Kartify</h1>
        <p>High Quality is our first priority</p>
      </div>

      <div className="rightFooter">
        <h4><FaGithub/></h4>
        <a target="_blank" href="https://github.com/prateekv2003/ecomm">Github</a>
      </div>
    </footer>
  );
};

export default Footer;
