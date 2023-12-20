import MuaraTakus from "./components/MuaraTakus";
import { useEffect } from "react";
function Page5() {
  function spreadDivs() {
    const stack = Array.from(document.getElementsByClassName('content-preview'));
    console.log(stack.length);

    for (let i = 0; i < stack.length; i++) {
      const shift = 90;
      stack[i].style.transform = `translateX(${shift*i}%)`;

      console.log(shift * i);
    }
  }

  function convertScrolling() {
    const container = document.querySelector('.sidescroll-page');
    container.addEventListener('wheel', (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
      
      console.log(e.deltaY);
      console.log(document.body.scrollLeft)
    })
  }

  function animateScroll() {
    const element = document.getElementById("first-content");
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "center center", // Trigger when the center of the element hits the center of the viewport
        scrub: 0.5              // Smoothly animate the properties
      }
    });


    tl.to(element, { 
      opacity: 1, duration: 2,
      x:400
     });
  
    
  }
  useEffect(()=> {
    convertScrolling();
    spreadDivs();
    animateScroll();
  }, [])
  return (
    <div className='sidescroll-page'>
      <div className='page5-hero-text'>
        <div className='empty-pg5' >
          <img id='pg5-judul' src='./images/tengok-ragam-real/Page 1/judul pg1.png'></img>
        </div>
      </div>
      <div className='pg5-content-list'>
        <img id='first-content' class='content-preview' src='./images/tengok-ragam-real/Page 1/Asset 1 pg1.png'></img>
        <img class='content-preview' src='./images/tengok-ragam-real/Page 1/aset2 pg1.png'></img>
        <img class='content-preview' src='./images/tengok-ragam-real/Page 1/aset3 pg1.png'></img>
        <img class='content-preview' src='./images/tengok-ragam-real/Page 1/aset4 pg1.png'></img>
        <img class='content-preview' src='./images/tengok-ragam-real/Page 1/aset5 pg 1.png'></img>
        <img class='content-preview' src='./images/tengok-ragam-real/Page 1/aset6 pg1.png'></img>
      </div>
      <MuaraTakus></MuaraTakus>
    </div>
  )
}

export default Page5;