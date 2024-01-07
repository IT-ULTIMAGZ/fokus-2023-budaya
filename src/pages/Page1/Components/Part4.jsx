import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import garis from "../Assets/bg/SUPERGRAFIS PAGE3-4.png";
import logo1 from "../Assets/text/PAGE_4_1.png";
import logo2 from "../Assets/text/PAGE_4_2.png";
import logo3 from "../Assets/text/PAGE_4_3.png";
import teks1 from "../Assets/text/PAGE_4_4.png";
import teks2 from "../Assets/text/PAGE_4_5.png";
import teks3 from "../Assets/text/PAGE_4_6.png";

const Part3 = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div
      className="mainbg"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="bgkoin" data-scroll-container>
        <img className="gariskoin" src={garis} alt="garis" />
        <div
          className="wrapperkoin"
          data-scroll
          data-scroll-speed="0.6"
          data-scroll-direction="horizontal"
        >
          <img className="headerkoin" src={logo1} alt="koin" />
          <img className="tekskoin" src={teks1} alt="koin" />
        </div>
      </div>
      <div className="spacerkoin" />
      <div className="bgkoin" data-scroll-container>
        <img className="gariskoin" src={garis} alt="garis" />
        <div
          className="wrapperkoin"
          data-scroll
          data-scroll-speed="0.5"
          data-scroll-direction="horizontal"
        >
          <img className="headerkoin" src={logo2} alt="koin" />
          <img className="tekskoin" src={teks2} alt="koin" />
        </div>
      </div>
      <div className="spacerkoin" />
      <div className="bgkoin" data-scroll-container>
        <img className="gariskoin" src={garis} alt="garis" />
        <div
          className="wrapperkoin"
          data-scroll
          data-scroll-speed="0.4"
          data-scroll-direction="horizontal"
        >
          <img className="headerkoin" src={logo3} alt="koin" />
          <img className="tekskoin" src={teks3} alt="koin" />
        </div>
      </div>
    </div>
  );
};

export default Part3;
