import "./Home.scss";
import React from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { TfiRulerPencil } from "react-icons/tfi";
import { SlBasketLoaded } from "react-icons/sl";
import Navbar from "../Navbar/Navbar";
const Home = () => {
    const playAnimation = () => {
        setTimeout(function () {
            mobileAnimation();
          }, 0);
          setTimeout(function () {
            customAnimation();
          }, 500);
          setTimeout(function () {
            affordAnimation();
          }, 1000);
    }
    const mobileAnimation = () => {
        document.getElementById("mobile").style.visibility = "visible";
        document.getElementById("mobile").style.animation = "slideUp 1.5s";
      };
      const customAnimation = () => {
        document.getElementById("custom").style.visibility = "visible";
        document.getElementById("custom").style.animation = "slideUp 1.5s";
      };
      const affordAnimation = () => {
        document.getElementById("afford").style.visibility = "visible";
        document.getElementById("afford").style.animation = "slideUp 1.5s";
      };
      playAnimation()
  return (
    <div className="Home-container" id="Home">
      <Navbar />
      <div className="home-inner-container">
        
        <div className="home-title-container">
          <p className="home-subtitle">Compliment your ideas with</p>
          <h1 className="home-title">Perfect business template</h1>
        </div>
        <div className="home-options-container">
          <div className="each-home-option-container" id='mobile'>
            <div className="each-home-option-icon-container">
              <AiOutlineMobile className="each-home-option-icon" />
            </div>
            <p className="each-home-option-title">01. Mobile ready</p>
            <p className="each-home-option-matter">
              Lorem ipsum dolor sit amet, Phasellus id erat eu.
            </p>
          </div>

          <div className="each-home-option-container" id='custom'>
            <div className="each-home-option-icon-container">
              <TfiRulerPencil className="each-home-option-icon" />
            </div>
            <p className="each-home-option-title">01. Customizable</p>
            <p className="each-home-option-matter">
              Lorem ipsum dolor sit amet, Phasellus id erat eu.
            </p>
          </div>

          <div className="each-home-option-container" id='afford'>
            <div className="each-home-option-icon-container">
              <SlBasketLoaded className="each-home-option-icon" />
            </div>
            <p className="each-home-option-title">01. Affordable</p>
            <p className="each-home-option-matter">
              Lorem ipsum dolor sit amet, Phasellus id erat eu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
