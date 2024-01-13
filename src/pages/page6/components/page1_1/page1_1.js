import React from "react";
import "./stylepage1_1.css";
import daun from "../../assets/gambar6.png";
import kaki from "../../assets/gambar1.png";
import tas from "../../assets/gambar2.png";
import kain from "../../assets/gambar3.png";
import batik from "../../assets/gambar4.png";
import AOS from "aos";


function page1() {
  AOS.init({
    duration : 1000,
    once: false,
  });

  return (
    <div className="boxx" data-scroll-container>
      <div className="bungkus" data-scroll data-scroll-speed="0.3" data-scroll-direction="horizontal">
        <div className="daun">
          <img src={daun} alt="IMG1" data-aos='fade-right-custom'/>
        </div>
        <div className="baris2_1">
          <div className="kaki" >
            <img src={kaki} alt="IMG2" data-aos='fade-down'/>
          </div>
          <div className="kain">
            <img src={kain} alt="IMG4" data-aos='fade-up-custom'/>
          </div>
        </div>
        <div className="baris3_1">
          <div className="tas">
            <img src={tas} alt="IMG3" data-aos='fade-left-custom' />
          </div>
          <div className="batik">
            <img src={batik} alt="IMG5" data-aos='fade-up-left-custom' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page1;
