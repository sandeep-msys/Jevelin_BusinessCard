import "./Navbar.scss";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";
import { SlCallIn } from "react-icons/sl";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { SlMagnifier } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const [showHiddenNav, setShowHiddenNav] = useState(false);
  const enableHiddenNavbar = () => {
    setShowHiddenNav(!showHiddenNav);
  };

  return (
    <div className="Navbar-container">
      <div className="navbar-addressing-container">
        <div className="navbar-addressing-inner-container">
          <div className="each-navbar-addressing-container">
            <AiOutlineMail className="each-navbar-addressing-icon" />
            <p className="each-navbar-addressing-matter">brand@company.co</p>
          </div>
          <div className="each-navbar-addressing-container">
            <SlCallIn className="each-navbar-addressing-icon" />
            <p className="each-navbar-addressing-matter">(024) 2 6129847</p>
          </div>
          <div className="each-navbar-addressing-container">
            <AiOutlineClockCircle className="each-navbar-addressing-icon" />
            <p className="each-navbar-addressing-matter">
              Mon. - Fri. 11AM - 19PM
            </p>
          </div>
        </div>
        <div className="navbar-addressing-icons-container">
          <div className="navbar-social-icons-container">
            <FiFacebook className="each-social-icon" />
            <CiTwitter className="each-social-icon" />
            <AiOutlineInstagram className="each-social-icon" />
          </div>
          <SlMagnifier className="magnifier-icon" />
        </div>
      </div>
      <div className="navbar-menu-container">
        <div className="navbar-title-container">
          <img
            src="https://jevelin.shufflehound.com/business/wp-content/uploads/sites/39/2019/11/Jevelin_logo_light.png"
            alt="/"
            className="navbar-title-image"
          />
        </div>
        {showHiddenNav ? (
          <RxCross1
            className="cross-icon"
            onClick={() => {
              enableHiddenNavbar();
            }}
          />
        ) : null}
        {showHiddenNav ? (
          <div className="hidden-nav">
            <a href="#Home" className="hidden-menu-option">
              Home
            </a>
            <a href="#About" className="hidden-menu-option">
              About
            </a>
            <a href="#Services" className="hidden-menu-option">
              Services
            </a>
            <a href="#Pricing" className="hidden-menu-option">
              Pricing
            </a>
            <a href="#Contact" className="hidden-menu-option">
              Contact
            </a>
            <button className="navbar-menu-button">Purchase</button>
            <p className="navbar-search">
              Search here..
              <SlMagnifier className="hidden-magnifier" />
            </p>
            <div className="hidden-social-icons-container">
              <FiFacebook className="hidden-social-icon" />
              <AiOutlineInstagram className="hidden-social-icon" />
              <CiTwitter className="hidden-social-icon" />
            </div>
          </div>
        ) : (
          <RxHamburgerMenu
            className="navbar-hamburger-icon"
            onClick={() => {
              enableHiddenNavbar();
            }}
          />
        )}

        <div className="navbar-menu-options-container">
          <a href="#Home" className="each-menu-option">
            Home
          </a>
          <a href="#About" className="each-menu-option">
            About
          </a>
          <a href="#Services" className="each-menu-option">
            Services
          </a>
          <a href="#Pricing" className="each-menu-option">
            Pricing
          </a>
          <a href="#Contact" className="each-menu-option">
            Contact
          </a>
          <button className="navbar-menu-button">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
