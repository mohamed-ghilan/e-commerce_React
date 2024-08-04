import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo}></img>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            velit explicabo eligendi nulla ut, corporis cupiditate dolorem
            perferendis laudantium. Sit, eum id! Harum voluptatum, excepturi
            placeat sed deleniti voluptas voluptatibus.
          </p>
          <div className="footer-social-icon">
            <img src={assets.twitter_icon}></img>
            <img src={assets.facebook_icon}></img>
            <img src={assets.linkedin_icon}></img>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy ploicy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+111-222-333</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <p className="footer-copyright">
        copyright 2024 &copy; Tomato.com All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
