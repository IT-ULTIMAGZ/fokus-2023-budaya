import React from "react";
import AOS from "aos";
import LocomotiveScroll from "locomotive-scroll";
import "./page1.css";
import Part1 from "./Components/Part1";
import Part2 from "./Components/Part2";
import Part3 from "./Components/Part3";
import Part4 from "./Components/Part4";
import Part5 from "./Components/Part5";
import Part6 from "./Components/Part6";
import Part7 from "./Components/Part7";
import Part8 from "./Components/Part8";
import Part9 from "./Components/Part9";
import Part10 from "./Components/Part10";
import BackButton from "../../components/BackButton";

const Page1 = () => {
  const locomotiveScroll = new LocomotiveScroll();
  AOS.init({
    duration: 1300,
    once: false,
  });
  return (
    <div style={{overflowX: "hidden"}}>
      <BackButton
        style={{
          bottom: "calc(72/1920*100vw)",
          left: "50%",
          zIndex: "100",
          transform: "translateX(-50%)",
      }}/>
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Part6 />
      <Part7 />
      <Part8 />
      <Part9 />
      <Part10 />
    </div>
  );
};

export default Page1;
