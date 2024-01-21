import React from "react";
import bg from "../Assets/illust/BG_PAGE_1.png";
import panah from "../Assets/text/PAGE_1_4.png";

const Part1 = () => {
  return (
    <div
      className="mainbg"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: "2%",
          position: "relative",
          // display: "flex",
          // justifyContent: "center",
        }}
        data-aos="zoom-out"
        data-aos-delay="500"
      >
        <h1 style={{fontSize:'calc(143,75/1920*100vw)',textAlign:'justify'}}>
          SEBERAPA DEKAT
          <i style={{ marginLeft: "calc(120/1920*100vw)" }}>ULTIMATES</i>
          <br />
          DENGAN BUDAYA NUSANTARA?
        </h1>
        <img
          src={panah}
          className="panah"
          alt="panah"
          style={{
            height: "auto",
            position: "absolute",
            left: "56.4%",
            top: "6vh",
            width:'7vw'
          }}
        />
      </div>
      <div
        className="titleCreator"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2%",
          height: "5%",
          width: "100%",
          // background: "black",
        }}
        data-aos="fade-zoom-in"
        data-aos-delay="1200"
      >
        <h3>
          <span>PENULIS</span>
          Felix Abraham Surya
        </h3>
        <h3 style={{ marginLeft: "5%" }}>
          <span>EDITOR</span>
          Alycia Catelyn
        </h3>
      </div>
    </div>
  );
};

export default Part1;
