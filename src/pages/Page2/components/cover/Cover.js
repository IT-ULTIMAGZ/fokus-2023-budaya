import React from "react";
import AOS from "aos";
import GambarCover2 from "../../assets/Asset_3.png";
import GambarCover from "../../assets/Asset 5@2x.png";
import "./styleCover.css";

function cover() {
  AOS.init({
    duration: 1000,
    once: false,
  });
  return (
    <div className="background">
      <div className="top">
        <div className="rotatedBackground">
          <img src={GambarCover}/>
        </div>
        <img
          src={GambarCover2}
        ></img>
      </div>
    </div>
  );
}

export default cover;
