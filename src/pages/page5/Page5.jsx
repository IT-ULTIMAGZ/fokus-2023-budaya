import MuaraTakus from "./components/muaraTakus/MuaraTakus";
import Penglipuran from "./components/penglipuran/Penglipuran";
import Cendrawasih from "./components/cendrawasih/Cendrawasih";
import Tomok from "./components/tomok/Tomok";
import Wakatobi from "./components/wakatobi/Wakatobi";
import End from "./components/end/End";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import './rubrik5.css';
// import AOS from 'aos';

function Page5() {
  const [scroll01,setScroll01] = useState(false);
  const [scroll02,setScroll02] = useState(false);
  const [scroll03,setScroll03] = useState(false);
  const [scroll04,setScroll04] = useState(false);
  const [scroll05,setScroll05] = useState(false);
  const [scroll06,setScroll06] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
 
  function convertScrolling() {
    const container = document.querySelector('.master');
    container.addEventListener('wheel', (e) => {
      e.preventDefault();
      document.querySelector('.sidescroll-page').scrollLeft += (e.deltaY + e.deltaX);
      container.scrollLeft += (e.deltaY + e.deltaX);
      console.log(e.deltaY);


    });

  }

  function scrollToSection() {
    const stack = Array.from(document.getElementsByClassName('content-preview'));
    stack.forEach(item => {
      item.addEventListener('click',  (e)=> {
        const id = item.dataset.section;
        const element = document.getElementById(id);
        element.scrollIntoView({behavior:'smooth'})
        
      });
    });
  }
  
  function handleScroll(scroll){
    if(scroll === 1){
      scroll01 === false ? setScroll01(true) : setScroll01(false);
    }else if(scroll === 2){
      scroll02 === false ? setScroll02(true) : setScroll02(false);
    }else if(scroll === 3){
      scroll03 === false ? setScroll03(true) : setScroll03(false);
    }else if(scroll === 4){
      scroll04 === false ? setScroll04(true) : setScroll04(false);
    }
    else if(scroll === 5){
      scroll05 === false ? setScroll05(true) : setScroll05(false);
    }else if(scroll === 6){
      scroll06 === false ? setScroll06(true) : setScroll06(false);
    }
    setScrollPosition(scroll);

  }
  useEffect(()=> {

  }, [scroll01,scroll02,scroll03,scroll04,scroll05]);
  // useEffect(()=> {
  //   AOS.init();
  //   convertScrolling();
  //   scrollToSection();

  // }, []);

  const handleScroll2 = (position) => {
    setScrollPosition(position);
  };


  return (
    <div className='master flex-row page5' style={{height:'100vh',overflowY:'hidden'}}>
        <div className='sidescroll-page '>
            <div className="sidescroll-hero flex-row justify-between">
              <img className='bg-img-sidescroll' src='./images/tengok-ragam-real/Page 1/bg pg1.png'></img>
              <div className='page5-hero-text'>
                <div className='empty-pg5'>
                  <img id='pg5-judul' src='./images/tengok-ragam-real/Page 1/judul pg1.png'></img>
                  <div style={{color:'white'}} className="flex-row justify-around align-center">
                    <div style={{gap:'10px'}}className="flex-row justify-around align-center">
                      <p style={{fontFamily:'National2Light',fontSize:'0.83vw'}}>PENULIS</p>
                      <p style={{fontSize:'2.01vw',fontFamily:'National2Light'}}>Ruth Yushiana</p>
                    </div>
                    <div style={{gap:'10px'}} className="flex-row justify-around align-center">
                      <p style={{fontFamily:'National2Light',fontSize:'0.83vw'}}>EDITOR</p>
                      <p style={{fontSize:'2.01vw',fontFamily:'National2Light'}}>Michael Ludovico</p>
                    </div>
                  </div>
                </div>
              </div>
              <div 
                // style={{ transform: `translateX(-${scrollPosition * 100}%)` }}
                className='pg5-content-list'>
                {scroll01 === false ? (
                  <img
                    data-section='muaratakus'
                    id='first-content'
                    onClick={() => handleScroll(1)}
                    className='content-preview'
                    src='./images/tengok-ragam-real/Page 1/Asset 1 pg1.png'
                    alt='MuaraTakus Preview'
                  />
                ) : (
                  <MuaraTakus scroll={true} />
                )}
                {scroll02 === false ? (<img data-section ='desapenglipuran' className='content-preview' onClick={()=>handleScroll(2)}  src='./images/tengok-ragam-real/Page 1/aset2 pg1.png'></img>):(<Penglipuran scroll={true} />)}
                {scroll03 === false ? (<img data-section ='desatomok' className='content-preview' onClick={()=>handleScroll(3)} src='./images/tengok-ragam-real/Page 1/aset3 pg1.png'></img>):(<Tomok scroll={true} />)}
                {scroll04 === false ? (<img data-section='cenderawasih' className='content-preview'onClick={()=>handleScroll(4)}  src='./images/tengok-ragam-real/Page 1/aset4 pg1.png'></img>):(<Cendrawasih scroll={true} />)}
                {scroll05 === false ? (<img data-section='wakatobi' className='content-preview'onClick={()=>handleScroll(5)}  src='./images/tengok-ragam-real/Page 1/aset5 pg 1.png'></img>):(<Wakatobi scroll={true} />)}
                {scroll06 === false ? (<img data-section='end' className='content-preview' onClick={()=>handleScroll(6)} src='./images/tengok-ragam-real/Page 1/aset6 pg1.png'></img>):(<End scroll={true} />)}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Page5;