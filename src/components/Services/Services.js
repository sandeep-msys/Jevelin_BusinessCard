import "./Services.scss";
import React from "react";
import { AiOutlineFormatPainter } from "react-icons/ai";
import { TfiStatsUp } from "react-icons/tfi";
import { GiNewspaper } from "react-icons/gi";
import { CiUnlock } from "react-icons/ci";
const servicesData = [
  {
    icon: <AiOutlineFormatPainter/>,
    heading: "Marketing strategies",
    matter: "Vivamus fermentum, augue a grav gravida, odio erat malesuada",
  },
  {
    icon: <TfiStatsUp/>,
    heading: "Consulting and analysis",
    matter: "Vivamus fermentum, augue a grav gravida, odio erat malesuada",
  },
  {
    icon: <GiNewspaper/>,
    heading: "Business planning",
    matter: "Vivamus fermentum, augue a grav gravida, odio erat malesuada",
  },
  {
    icon: <CiUnlock/>,
    heading: "30+ years of experience",
    matter: "Vivam us fermentum, augue a grav gravida, odio erat malesuada",
  },
];
const Services = () => {
  return (
    <div className="Services-container" id="Services">
      <div className="service-title-container">
        <p className="service-title">To compliment your ideas</p>
        <h1 className="service-subtitle">Services we can provide</h1>
      </div>
      <div className="service-provide-container">
        {servicesData.map((item) => {
          return (
            <div className="each-service-container">
              <div className="service-icon">{item.icon}</div>
              <p className="service-heading">{item.heading}</p>
              <p className="service-matter">{item.matter} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
