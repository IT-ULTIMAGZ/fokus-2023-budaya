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

const Page3 = () => {
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [currentElement, setCurrentElement] = useState(null);
//   const [listElement, setListElement] = useState(["part2", "part3", "part4", "part5", "part6", "part7"]);

//   useEffect(() => {
//     const handleScroll = () => {
//       console.log("scrolling");

//       if (isScrolling) return;

//       const currentElement = scrollSpy.getElement();
//       const nextElement = currentElement.nextElement;
//       console.log(nextElement);

//       setIsScrolling(true);

//       scroller.scrollTo(nextElement, {
//         duration: 800,
//         smooth: "easeInOutQuart",
//         offset: -50,
//         onSpy: () => {
//           setIsScrolling(false);
//         },
//       });
//     };

//     window.addEventListener("scroll", handleScroll);

//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
//   }, [isScrolling]);

  return (
    <div style={{width:'100vw',overflowX:'hidden'}}>
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
