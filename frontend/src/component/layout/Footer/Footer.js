import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import { FaGithub } from "react-icons/fa"
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
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
