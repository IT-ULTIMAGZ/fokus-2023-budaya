import React from "react";
import "./stylepage10.css";
import kaki from "../../assets/gambar1.png";
import asset1 from "../../assets/Asset 1.svg";
import maragaAraga from '../../assets/maragaAraga.svg';
import AOS from "aos";
import aragaSulawesiPutih from "../../assets/aragaSulawesiPutih.svg";
import LocomotiveScroll from "locomotive-scroll";
function page10() {
  
  AOS.init({
    duration: 1000,
    once: false,
  });
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="pembungkuspage10">
      <div className="page10kiri" data-scroll data-scroll-speed='0.6'>
        <img src={kaki} alt="MARAGA"></img>
        <img src={aragaSulawesiPutih} className="textTitle"/>
      </div>
      <div className="page10kanan">
        <div className="page10atas">
        </div>
        <div className="page10isi">
        <img src={maragaAraga} data-aos='zoom-in-custom'/>
          <div className="descpage10">
            <img src={asset1} data-aos='zoom-in-custom' data-aos-delay='500'/>
            <p data-aos='zoom-in-custom' data-aos-delay='800'>
              merupakan permainan ketangkasan dengan menggunakan bola <br />
              yang terbuat dari anyaman rotan yang disebut raga.
            </p>
          </div>
          <div className="penjelasanpage10" data-aos='zoom-in-custom' data-aos-delay='1100'>
            <h1>
              Permainan tradisional yang berasal dari Sulawesi
              <br />
              Selatan ini menjadi atraksi hiburan di waktu
              <br /> senggang dan juga dijadikan perlombaan.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page10;
