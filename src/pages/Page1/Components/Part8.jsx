import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import bg from "../Assets/bg/BG_PAGE_8.png";
import teks from "../Assets/text/PAGE_8.png";
import stepLadder from "../Assets/illust/Step_and_Ladder.png";

const Part6 = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div
      className="mainbg"
      style={{
        background: "#096B49",
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
      <div className="whiteleftbox" />
      <div className="rightDecoration">
        <img src={bg} className="props" alt="bg" />
      </div>
      <div className="leftDecoration">
        <img
          src={stepLadder}
          style={{ marginLeft: "18%" }}
          className="doubleBlock mirrored"
          alt="stepLadder"
        />
      </div>

      <div
        className="textwrapper"
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          alignItems: "start",
        }}
        data-scroll-container
      >
        <img
          src={teks}
          className="teks"
          style={{ height: "40%" }}
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
