import MuaraTakus from "./components/MuaraTakus";
import { useEffect, useState } from "react";

function Page5() {
 
  function convertScrolling() {
    const container = document.querySelector('.master');
    container.addEventListener('wheel', (e) => {
      e.preventDefault();
      container.scrollLeft += (e.deltaY + e.deltaX);
      console.log(e.deltaY);
    });

  }

  function expandWhenClicked() {
    const stack = Array.from(document.getElementsByClassName('content-preview'));
    
    stack.forEach(item => {
      item.addEventListener('click', function (e) {
        alert('test')    
        item.style.display = `scale(80%)`;
      });
    });
  }
  
  

  function animateScroll() {
    const slider = document.querySelector('.sidescroll-page');
    const element = document.getElementById("first-content");
    // let tl = gsap.timeline({
    //   defaults : {
    //     ease: "none"
    //   },
    //   scrollTrigger: {
    //     trigger: slider,
    //     pin:true,
    //     start: "center center", // Trigger when the center of the element hits the center of the viewport
    //     scrub: 0.5,
    //     end: ()=> "+=" + slider.offsetWidth
    //                   // Smoothly animate the properties
    //   }
    // });

    // tl.to(slider, {
    //   xPercent: -66,
    // });
  }

  const [backgrounds, setBgs] = useState([]);

  function getBackgrounds() {
    let bgs = [];
    const baseDir = './images/tengok-ragam-real';

    for (let i = 1; i < 8; i++) {
      bgs.push(`${baseDir}/Page ${i}/ bg pg${i}.png`);
    }

    setBgs(bgs);
  }

  function smoothScroll() {
    const lenis = new Lenis();

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
  }

requestAnimationFrame(raf)
  }
  useEffect(()=> {
    // convertScrolling();
    // spreadDivs();

    // smoothScroll();
    animateScroll();
    expandWhenClicked();
    getBackgrounds();
    console.log(backgrounds);

  }, []);


  return (
    <div className='master flex-row justify-start'>
        <div className='sidescroll-page'>
            <div className="sidescroll-hero flex-row">
              <img className='bg-img-sidescroll' src='./images/tengok-ragam-real/Page 1/bg pg1.png'></img>
              {/* <div style={{width: '100vw', height:'100vh'}></div> */}
              <div className='page5-hero-text'>
                <div className='empty-pg5'>
                  <img id='pg5-judul' src='./images/tengok-ragam-real/Page 1/judul pg1.png'></img>
                </div>
              </div>
              <div className="master-left"></div>
              <div className='pg5-content-list'>
                <img id='first-content' className='content-preview' src='./images/tengok-ragam-real/Page 1/Asset 1 pg1.png'></img>
                <img className='content-preview' src='./images/tengok-ragam-real/Page 1/aset2 pg1.png'></img>
                <img className='content-preview' src='./images/tengok-ragam-real/Page 1/aset3 pg1.png'></img>
                <img className='content-preview' src='./images/tengok-ragam-real/Page 1/aset4 pg1.png'></img>
                <img className='content-preview' src='./images/tengok-ragam-real/Page 1/aset5 pg 1.png'></img>
                <img className='content-preview' src='./images/tengok-ragam-real/Page 1/aset6 pg1.png'></img>
              </div> 
            </div>
           
        </div>

      {/* <MuaraTakus></MuaraTakus> */}

    </div>
  )
}

export default Page5;