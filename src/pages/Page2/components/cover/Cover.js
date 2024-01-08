import React from "react";
import AOS from "aos";
import GambarCover2 from "../../assets/Asset_3.png";
import "./styleCover.css";

function cover() {
  AOS.init({
    duration: 1000,
    offset: 330,
    once: false,
  });
  return (
    <div className="background">
      <div className="top">
        <img
          src={GambarCover2}
          data-aos-once="false"
          data-aos="zoom-out-custom"
        ></img>
      </div>
    </div>
  );
}

export default cover;
