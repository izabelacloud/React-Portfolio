import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => (
    <>
  <div className="footer">
    <a href="https://github.com/izabelacloud" target="_blank" rel="noopener noreferrer">
        <img alt="Github" className="footer-img" src={require("../assets/icons/github2.png")} />
    </a> 

    <a href="https://www.linkedin.com/in/izabela-petrovicova-320b1620/" target="_blank" rel="noopener noreferrer">
        <img alt="LinkedIn" className="footer-img" src={require("../assets/icons/linkedin4.png")} />
    </a> 

    <a href="https://twitter.com/IPetrovicova" target="_blank" rel="noopener noreferrer">
        <img alt="Twitter" className="footer-img" src={require("../assets/icons/twitter3.png")} />
    </a> 
  </div>
  </>
);

export default Footer;