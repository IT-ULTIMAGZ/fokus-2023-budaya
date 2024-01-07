import React from "react";
import { Element } from "react-scroll";
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

const Page1 = () => {
  return (
    <div>
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
    </div>
  );
};

export default Page1;
