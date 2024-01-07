import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import bg from "../Assets/bg/BG_PAGE_9.png";
import teks from "../Assets/text/PAGE_9.png";
import stepWhite from "../Assets/illust/Step_White.png";
import stepGreen from "../Assets/illust/Step_Green.png";

const Part6 = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div
      className="mainbg"
      style={{
        background: "#ef4f55",
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
      <div className="whiterightbox" />
      <div className="leftDecoration">
        <img src={bg} className="props" alt="bg" />
      </div>
      <div
        className="rightDecoration"
        style={{ flexDirection: "row", marginRight: "4%", marginTop: "-2px" }}
      >
        <img src={stepWhite} className="singleBlock" alt="step" />
        <img src={stepGreen} className="singleBlock" alt="step" />
      </div>

      <div
        className="textwrapper"
        style={{
          position: "absolute",
          marginTop: "2%",
          right: "15%",
          alignItems: "start",
        }}
        data-scroll-container
      >
        <img
          src={teks}
          className="teks"
          style={{ height: "50%" }}
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
