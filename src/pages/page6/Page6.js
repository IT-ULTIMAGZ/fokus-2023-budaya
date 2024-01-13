import Cover from "./components/cover/cover";
import Page1 from "./components/page1_1/page1_1";
import Page3 from "./components/page3/page3";
import Page4 from "./components/page4/page4";
import Page5 from "./components/page5/page5";
import Page6 from "./components/page6/page6";
import Page7 from "./components/page7/page7";
import Page8 from "./components/page8/page8";
import Page9 from "./components/page9/page9";
import Page10 from "./components/page10/page10";
import Page11 from "./components/page11/page11";
import Page12 from "./components/page12/page12";
import Page13 from "./components/page13/page13";
import Page14 from "./components/page14/page14";
import Page15 from "./components/page15/page15";
import Page16 from "./components/page16/page16";
import Page17 from "./components/page17/page17";
import Page18 from "./components/page18/page18";
import Page19 from "./components/page19/page19";
import AOS from "aos";
import LocomotiveScroll from "locomotive-scroll";
import BackButton from "../../components/BackButton";

function Page_6() {
  const locomotiveScroll = new LocomotiveScroll();
  AOS.init({
    duration: 1000,
    once: false,
  });
  const style = {
    marginLeft: "calc(72/1920*100vw)",
    bottom: "calc(72/1920*100vw)",
  };
  
  return (
    <div className="app" style={{width:'100vw',overflow:'hidden'}}>
      <BackButton style={style} />
      <Cover />
      <Page1 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <Page9 />
      <Page10 />
      <Page11 />
      <Page12 />
      <Page13 />
      <Page14 />
      <Page15 />
      <Page16 />
      <Page17 />
      <Page18 />
      <Page19 />
    </div>
  );
}

export default Page_6;
