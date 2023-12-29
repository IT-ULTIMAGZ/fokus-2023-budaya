import MuaraTakus from "./components/MuaraTakus";
import { useEffect, useState } from "react";
import './rubrik5.css';
// import AOS from 'aos';

function Page5() {
 
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
      item.addEventListener('click',  ()=> {
        const id = item.dataset.section;
        const element = document.getElementById(id);
        element.scrollIntoView({behavior:'smooth'})
        
      });
    });
  }
  
  // useEffect(()=> {
  //   AOS.init();
  //   convertScrolling();
  //   scrollToSection();

  // }, []);


  return (
    <div className='master flex-row justify-start'>
        <div className='sidescroll-page '>
            <div className="sidescroll-hero flex-row justify-between">
              <img className='bg-img-sidescroll' src='./images/tengok-ragam-real/Page 1/bg pg1.png'></img>
              {/* <div style={{width: '100vw', height:'100vh'}></div> */}
              <div className='page5-hero-text'>
                <div className='empty-pg5'>
                  <img id='pg5-judul' src='./images/tengok-ragam-real/Page 1/judul pg1.png'></img>
                  <div style={{color:'white'}} className="flex-row justify-around align-center">
                    <div style={{gap:'10px'}}className="flex-row justify-around align-center">
                      <p>PENULIS</p>
                      <p style={{fontSize:'1.4em'}}>Ruth Yushiana</p>
                    </div>
                    <div style={{gap:'10px'}} className="flex-row justify-around align-center">
                      <p>EDITOR</p>
                      <p style={{fontSize:'1.4em'}}>Michael Ludovico</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="master-left"></div>
              <div data-aos='fade-in' className='pg5-content-list'>
                <img  data-section ='muaratakus' id='first-content' className='content-preview' src='./images/tengok-ragam-real/Page 1/Asset 1 pg1.png'></img>
                <img data-section ='desapenglipuran' className='content-preview' src='./images/tengok-ragam-real/Page 1/aset2 pg1.png'></img>
                <img data-section ='desatomok' className='content-preview' src='./images/tengok-ragam-real/Page 1/aset3 pg1.png'></img>
                <img data-section='cenderawasih' className='content-preview' src='./images/tengok-ragam-real/Page 1/aset4 pg1.png'></img>
                <img data-section='wakatobi' className='content-preview' src='./images/tengok-ragam-real/Page 1/aset5 pg 1.png'></img>
                <img data-section='end' className='content-preview' src='./images/tengok-ragam-real/Page 1/aset6 pg1.png'></img>
              </div> 
            </div>
            <MuaraTakus></MuaraTakus>

            

        </div>


    </div>
  )
}

export default Page5;