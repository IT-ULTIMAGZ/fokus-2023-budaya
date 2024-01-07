import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import bg from "../Assets/bg/BG_PAGE_5.png";
import penulis from "../Assets/text/PAGE_5_1.png";
import teks from "../Assets/text/PAGE_5_2.png";
import stepLadder from "../Assets/illust/Step_and_Ladder.png";
import stepYellowHor from "../Assets/illust/Step_horizontal.png";
import stepWhiteHor from "../Assets/illust/Step_white_horizontal.png";
import stepGreen from "../Assets/illust/Step_Green.png";
import stepWhite from "../Assets/illust/Step_White.png";

const Part5 = () => {
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
      <div className="whiterightbox" />
      <div className="leftDecoration">
        <img src={bg} className="props" alt="bg" />
        {/* <img src={stepLadder} className="doubleBlock" alt="kotak" />
        <div className="merge">
          <img className="doubleBlock" src={stepYellowHor} alt="kotak" />
          <img
            className="mirrored doubleBlock"
            src={stepWhiteHor}
            alt="kotak"
          />
        </div> */}
      </div>
      {/* <div className="bottomBlocks">
        <div style={{ display: "flex", flexDirection: "column-reverse" }}>
          <img className="singleBlock" src={stepGreen} alt="kotak" />
        </div>
        <div style={{ display: "flex", flexDirection: "column-reverse" }}>
          <img className="singleBlock" src={stepWhite} alt="kotak" />
        </div>
        <div style={{ display: "flex", flexDirection: "column-reverse" }}>
          <img className="singleBlock" src={stepGreen} alt="kotak" />
          <img className="singleBlock" style={{marginLeft: "7%", marginBottom: "-2%"}} src={stepWhite} alt="kotak" />
        </div>
      </div> */}

      <div
        className="textwrapper"
        style={{ position: "absolute", right: "10%" }}
        data-scroll-container
      >
        <img
          src={penulis}
          className="penulis"
          alt="penulis"
          data-scroll
          data-scroll-speed="0.1"
          data-scroll-direction="horizontal"
        />
        <img
          src={teks}
          className="teks"
          style={{ marginTop: "-2vh" }}
          alt="teks"
          data-scroll
          data-scroll-speed="0.5"
          data-scroll-direction="horizontal"
        />
      </div>
    </div>
  );
};

export default Part5;
