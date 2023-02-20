import "./Footer.scss";
import React from "react";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";

const Explore = ["Cookies", "About", "Privacy Policy,", "Licenses"];
const Important = ["Timeline", "News", "Licensing,", "Insight"];
const Categories = ["Startegy", "Terms & conditions", "Services", "FAQ"];

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main-container">
        <div className="footer-title-container">
          <img
            src="https://jevelin.shufflehound.com/business/wp-content/uploads/sites/39/2019/11/Jevelin_logo_light.png"
            alt="/"
            className="footer-title-image"
          />
          <p className="footer-title-matter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
          </p>
          <div className="footer-icons-container">
            <FaLinkedinIn className="footer-social-icon" />
            <FiFacebook className="footer-social-icon" />
            <AiOutlineInstagram className="footer-social-icon" />
            <CiTwitter className="footer-social-icon" />
          </div>
        </div>
        <div className="footer-options-main-container">

       
        <div className="footer-options-container">
          <p className="footer-each-option-title">Explore</p>
          {Explore.map((item) => {
            return <p className="footer-each-option">{item}</p>;
          })}
        </div>

        <div className="footer-options-container">
          <p className="footer-each-option-title">Important</p>
          {Important.map((item) => {
            return <p className="footer-each-option">{item}</p>;
          })}
        </div>

        <div className="footer-options-container">
          <p className="footer-each-option-title">Categories</p>
          {Categories.map((item) => {
            return <p className="footer-each-option">{item}</p>;
          })}
        </div>
        </div>
      </div>

      <div className="footer-copyright-container">
        <p className="copyright">
          Copyright 2019 Shufflehoun. All rights reserved.
        </p>
        <div className="footer-menu-container">
          <p className="footer-each-menu">Home</p>
          <p className="footer-each-menu">About</p>
          <p className="footer-each-menu">Services</p>
          <p className="footer-each-menu">Pricing</p>
          <p className="footer-each-menu">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
