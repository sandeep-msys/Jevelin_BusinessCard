import "./Choices.scss";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
const Choices = () => {
    const enableChoiceAnimations = () => {
        document.getElementById("startUpContainer").style.visibility = "visible";
        document.getElementById("startUpContainer").style.animation = "slideToLeft 1s";
        setTimeout(function () {
          document.getElementById("businessContainer").style.visibility = "visible";
          document.getElementById("businessContainer").style.animation =
            "slideToLeft 1.4s";
        }, 1000);
      };
  return (
    <div className="Choices-container" id='Pricing'
    onMouseOver={() => {
        enableChoiceAnimations();
      }}>
      <div className="choice-title-container">
        <h1 className="choice-title">Check out our most popular choises</h1>
        <p className="choice-subtitle">
          Ut et nisi ac dui pulvinar consequat. Curabitur aliquam, felis ut
          ultricies porta, ante dolor iac
        </p>
      </div>
      <div className="choice-subscription-container">
        <div className="each-subscription-container" id='startUpContainer'>
          <div className="subscription-about-container">
            <p className="subscription-heading">Startup</p>
            <h1 className="subscription-price">$48</h1>
            <p className="subscription-matter">
              Curabitur aliquam, felis ut ultricies porta, ante dolor iaculis
              ante, ante dolor iaculis anteet frin gilla ligula tortor eget
              nisi.
            </p>
          </div>
          <div className="subscription-advantages-container">
            <div className="each-advantage">
              <AiOutlinePlus className="plus-icon" />
              <p className="advantage-heading">Picture library</p>
            </div>
            <div className="each-advantage">
              <AiOutlinePlus className="plus-icon" />
              <p className="advantage-heading">24h support</p>
            </div>
            <div className="each-advantage">
              <AiOutlinePlus className="plus-icon" />
              <p className="advantage-heading">Advanced search</p>
            </div>
            <div className="each-advantage">
              <AiOutlinePlus className="plus-icon" />
              <p className="advantage-heading">Template library</p>
            </div>
            <div className="each-advantage">
              <AiOutlinePlus className="plus-icon" />
              <p className="advantage-heading">400 GB cloud storage</p>
            </div>
            <button className="pricing-button">Choose pricing</button>
          </div>
        </div>


        <div className="each-subscription-container highlight" id='businessContainer'>
          <div className="subscription-about-container">
            <p className="subscription-heading">Business</p>
            <h1 className="subscription-price">$120</h1>
            <p className="subscription-matter">
              Curabitur aliquam, felis ut ultricies porta, ante dolor iaculis
              ante, ante dolor iaculis anteet frin gilla ligula tortor eget
              nisi.
            </p>
          </div>
          <div className="subscription-advantages-container">
            <div className="each-advantage">
              <AiOutlinePlus className="plus-icon" />
              <p className="advantage-heading">Picture library</p>
            </div>
            <div className="each-advantage">
              <AiOutlinePlus className="plus-icon" />
              <p className="advantage-heading">24h support</p>
            </div>
            <div className="each-advantage">
              <AiOutlinePlus className="plus-icon" />
              <p className="advantage-heading">Advanced search</p>
            </div>
            <div className="each-advantage">
              <AiOutlinePlus className="plus-icon" />
              <p className="advantage-heading">Template library</p>
            </div>
            <div className="each-advantage">
              <AiOutlinePlus className="plus-icon" />
              <p className="advantage-heading">800 GB cloud storage</p>
            </div>
            <button className="pricing-button">Choose pricing</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choices;
