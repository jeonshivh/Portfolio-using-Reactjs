import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import './App.css'
function Footer() {
  return (
    <div class="social-container">
     <center> <h3>Social Follow</h3>
      <a href="https://www.youtube.com"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
     
      <a href="https://www.facebook.com"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a></center>
    </div>
  );
}
export default Footer;

