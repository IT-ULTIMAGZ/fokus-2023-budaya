import Cover from './components/cover/Cover';
import Page1 from './components/page_1/Page1';
import Page2 from './components/page_2/Page2';
import Page3 from './components/page_3/Page3';
import Page4 from './components/page_4/Page4';
import Page5 from './components/page_5/Page5';
import Page6 from './components/page_6/Page6';
import Page7 from './components/page_7/Page7';
import Page8 from './components/page_8/Page8';
import Page9 from './components/page_9/Page9';
import Page10 from './components/page_10/Page10';
import AOS from "aos";
import LocomotiveScroll from "locomotive-scroll";

function page_2() {
  const locomotiveScroll = new LocomotiveScroll();
  AOS.init({
    duration: 1000,
    offset: 330,
    once: false,
  });
  return (
    <div >
      <Cover />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <Page9 />
      <Page10 />
    </div>
  );
}

export default page_2;
