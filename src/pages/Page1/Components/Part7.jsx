import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import bg from "../Assets/bg/BG_PAGE_7.png";
import penulis from "../Assets/text/PAGE_7_1.png";
import teks from "../Assets/text/PAGE_7_2.png";

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
      <div className="whiterightbox" />
      <div className="leftDecoration">
        <img src={bg} className="props" alt="bg" />
      </div>

      <div
        className="textwrapper"
        style={{ position: "absolute", right: "10%", alignItems: "start" }}
      >
        <img
          src={penulis}
          className="penulis"
          alt="penulis"
          data-aos="fade-zoom-in"
        />
        <img
          src={teks}
          className="teks"
          style={{ height: "56%" }}
          alt="teks"
          data-aos="fade-down"
        />
      </div>
    </div>
  );
};

export default Part6;
