import React, { useState, useEffect } from "react";
import { Element, Events, scrollSpy, scroller } from "react-scroll";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Part4 from "./Part4";
import Part5 from "./Part5";
import Part6 from "./Part6";
import Part7 from "./Part7";
import Part8 from "./Part8";
import Part9 from "./Part9";
import Part10 from "./Part10";
import Part11 from "./Part11";
import Part12 from "./Part12";
import BackButton from "../../components/BackButton";

const Page3 = () => {

  return (
    <div style={{width:'100vw',overflowX:'hidden'}}>
      <BackButton
        style={{
          bottom: "calc(72/1920*100vw)",
          left: "50%",
          zIndex: "100",
          transform: "translateX(-50%)",
      }}/>
      <Element name="part1">
        <Part1 />
      </Element>
      <Element name="part2">
        <Part2 />
      </Element>
      <Element name="part3">
        <Part3 />
      </Element>
      <Element name="part4">
        <Part4 />
      </Element>
      <Element name="part5">
        <Part5 />
      </Element>
      <Element name="part6">
        <Part6 />
      </Element>
      <Element name="part7">
        <Part7 />
      </Element>
      <Element name="part8">
        <Part8 />
      </Element>
      <Element name="part9">
        <Part9 />
      </Element>
      <Element name="part10">
        <Part10 />
      </Element>
      <Element name="part11">
        <Part11 />
      </Element>
      <Element name="part12">
        <Part12 />
      </Element>
    </div>
  );
};

export default Page3;
