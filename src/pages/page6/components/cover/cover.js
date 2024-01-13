import React from "react";
import "./stylecover.css";
import telisik from "../../assets/telisik.svg";
import budaya from "../../assets/budaya.svg";
import bendaTakBenda from "../../assets/bendaTakbenda.svg";
import indonesia from "../../assets/indonesia.svg";
import untuk from "../../assets/untuk.svg";
import kehidupanSehariHari from "../../assets/kehidupanSehariHari.svg";
import AOS from "aos";
function cover() {
  AOS.init({
    duration : 1000,
    once: false,
  });
  return (
    <div className="box">
      <div className="baris1 baris">
        <div className="telisik5">
          <img src={telisik} data-aos='fade-right-custom'/>
        </div>
        <div className="budaya">
          <img src={budaya} data-aos='fade-left-custom'/>
        </div>
      </div>
      <div className="baris2 baris">
        <div className="batik1"></div>
        <div className="benda">
          <img src={bendaTakBenda} data-aos-delay='300' data-aos='fade-right-custom'/>
        </div>
        <div className="namaorg">
          <div className="namapenulis" data-aos='fade-left-custom'>
            <p>Penulis:</p>
            <h5>Wynnie Saputri Jansen</h5>
          </div>
          <div className="namapenulis" data-aos='fade-left-custom'>
            <p>Editor:</p>
            <h5>Michael Ludovico</h5>
          </div>
        </div>
      </div>
      <div className="baris3 baris">
        <div className="indonesia">
          <img  src={indonesia} data-aos='fade-right-custom' data-aos-delay='600' alt=''/>
        </div>
        <div className="untuk">
          <img src={untuk}  data-aos='fade-left-custom' data-aos-delay='600' alt=''/>
        </div>
      </div>
      <div className="baris4 baris">
        <div className="batik2"></div>
        <div className="kehidupan">
         <img alt='' data-aos='fade-left-custom' data-aos-delay='900' src={kehidupanSehariHari}/>
        </div>
      </div>
    </div>
  );
}

export default cover;
