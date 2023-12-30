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
        <div className="judul">
          <h1>01</h1>
        </div>
        <div className="gambarudeng gambarr">
          <img src={daun} alt="UDENG"></img>
        </div>
        <div className="desc">
          <h1>
            UDENG <br /> KHAS <br /> BALI
          </h1>
        </div>
      </div>
      <div className="tikar panjang">
        <div className="judul">
          <h1>02</h1>
        </div>
        <div className="gambarr gambartikar">
          <img src={batik} alt="Tikar"></img>
        </div>
        <div className="desc">
          <h1>
            TIKAR <br /> PANDAN <br /> SERASAN <br /> NATUNA
          </h1>
        </div>
      </div>
      <div className="araga panjang">
        <div className="judul">
          <h1>03</h1>
        </div>
        <div className="gambarr gambararaga">
          <img src={kaki} alt="ARAGA"></img>
        </div>
        <div className="desc">
          <h1>
            A'RAGA <br /> SULAWESI <br /> SELATAN
          </h1>
        </div>
      </div>
      <div className="noken panjang">
        <div className="judul">
          <h1>04</h1>
        </div>
        <div className="gambarr gambarnoken">
          <img src={tas} alt="NOKEN"></img>
        </div>
        <div className="desc">
          <h1>
            NOKEN <br /> KHAS <br /> PAPUA
          </h1>
        </div>
      </div>
      <div className="tenun panjang">
        <div className="judul">
          <h1>05</h1>
        </div>
        <div className="gambarr gambartenun">
          <img src={kain} alt="tenun"></img>
        </div>
        <div className="desc">
          <h1>
            TENUN <br /> IKAT <br /> DAYAK <br /> SINTANG
          </h1>
        </div>
      </div>
    </div>
  );
}

export default page3;
