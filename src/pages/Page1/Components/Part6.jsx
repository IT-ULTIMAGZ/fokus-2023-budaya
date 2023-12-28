import React from "react";
import bg from "../Assets/bg/BG_PAGE_6.png";
import penulis from "../Assets/text/PAGE_6_1.png";
import teks from "../Assets/text/PAGE_6_2.png";

const Part6 = () => {
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
      <div className="whiteleftbox" />
      <div className="rightDecoration">
        <img src={bg} className="props" alt="bg"/>
      </div>
      
      <div
        className="textwrapper"
        style={{ position: "absolute", left: "10%", alignItems: "start" }}
      >
        <img src={penulis} className="penulis" alt="penulis" />
        <img
          src={teks}
          className="teks"
          alt="teks"
        />
      </div>
    </div>
  );
};

export default Part6;
