import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import bgl from "../Assets/bg/BG_PAGE_10_L.png";
import bgr from "../Assets/bg/BG_PAGE_10_R.png";
import teks from "../Assets/text/PAGE_10.png";

const Part6 = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div
      className="mainbg"
      style={{
        background: "#ffaf00",
        position: "relative",
        // backgroundImage: `url(${bg})`,
        // backgroundPosition: "center",
        // backgroundSize: "contain",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      {/* <div className="whiteleftbox" /> */}
      <div className="leftDecoration">
        <img src={bgl} className="props" alt="bg" />
      </div>
      <div className="rightDecoration">
        <img src={bgr} className="props" alt="bg" />
      </div>

      <div
        className="textwrapper"
        style={{
          position: "absolute",
          marginTop: "3%",
          left: "10%",
          alignItems: "start",
        }}
        data-scroll-container
      >
        <img
          src={teks}
          className="teks"
          style={{ height: "53%" }}
          alt="teks"
          data-scroll
          data-scroll-speed="0.2"
          data-scroll-direction="horizontal"
        />
      </div>
    </div>
  );
};

export default Part6;
