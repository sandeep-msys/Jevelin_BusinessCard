import "./Contact.scss";
import React from "react";
import { SlEarphonesAlt } from "react-icons/sl";

const Contact = () => {
  return (
    <div className="contact-container" id='Contact'>
      <div className="contact-title-container">
        <p className="contact-subtitle">To compliment your ideas</p>
        <h1 className="contact-title">
          Perfect business template that you will love with all heart
        </h1>
        <button className="contact-button">
          <SlEarphonesAlt className="contact-icon"/>
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Contact;
