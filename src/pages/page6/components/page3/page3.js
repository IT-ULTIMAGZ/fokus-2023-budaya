import React from "react";
import "./stylepage3.css";
import daun from "../../assets/gambar6.png";
import kaki from "../../assets/gambar1.png";
import tas from "../../assets/gambar2.png";
import kain from "../../assets/gambar3.png";
import batik from "../../assets/gambar4_1.png";

function page3() {
  return (
    <div className="boxxes">
      <div className="undeng panjang">
        <div className="judul3" data-aos="fade-down">
          <h1>01</h1>
        </div>
        <div className="gambarudeng gambarr" data-scroll-container>
          <img src={daun} alt="UDENG"
          data-scroll
          data-scroll-speed="0.07"></img>
        </div>
        <div className="desc" data-aos="fade-up" data-aos-offset="100">
          <h1>
            UDENG <br /> <h2>KHAS</h2> BALI
          </h1>
        </div>
      </div>
      <div className="tikar panjang">
        <div className="judul3" data-aos="fade-down">
          <h1>02</h1>
        </div>
        <div className="gambarr gambartikar" data-scroll-container> 
          <img src={batik} alt="Tikar"
          data-scroll
          data-scroll-speed="0.07"></img>
        </div>
        <div className="desc" data-aos="fade-up" data-aos-offset="100">
          <h1>
            TIKAR <br /> <h2>PANDAN <br /> SERASAN</h2> NATUNA
          </h1>
        </div>
      </div>
      <div className="araga panjang">
        <div className="judul3" data-aos="fade-down">
          <h1>03</h1>
        </div>
        <div className="gambarr gambararaga" data-scroll-container>
          <img src={kaki} alt="ARAGA"
          data-scroll
          data-scroll-speed="0.07"></img>
        </div>
        <div className="desc" data-aos="fade-up" data-aos-offset="100">
          <h1>
            A'RAGA <br /><h2>SULAWESI <br /> SELATAN</h2>
          </h1>
        </div>
      </div>
      <div className="noken panjang">
        <div className="judul3" data-aos="fade-down">
          <h1>04</h1>
        </div>
        <div className="gambarr gambarnoken" data-scroll-container>
          <img src={tas} alt="NOKEN"
          data-scroll
          data-scroll-speed="0.07"></img>
        </div>
        <div className="desc" data-aos="fade-up" data-aos-offset="100">
          <h1>
            NOKEN <br /> <h2>KHAS</h2> PAPUA
          </h1>
        </div>
      </div>
      <div className="tenun panjang">
        <div className="judul3" data-aos="fade-down">
          <h1>05</h1>
        </div>
        <div className="gambarr gambartenun" data-scroll-container>
          <img src={kain} alt="tenun"
          data-scroll
          data-scroll-speed="0.07"></img>
        </div>
        <div className="desc" data-aos="fade-up" data-aos-offset="100">
          <h1>
            TENUN <br /> IKAT <br /><h2>DAYAK <br /> SINTANG</h2> 
          </h1>
        </div>
      </div>
    </div>
  );
}

export default page3;
