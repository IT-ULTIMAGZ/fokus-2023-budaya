import React from "react";
import "./stylepage1_1.css";
import daun from "../../assets/gambar6.png";
import kaki from "../../assets/gambar1.png";
import tas from "../../assets/gambar2.png";
import kain from "../../assets/gambar3.png";
import batik from "../../assets/gambar4.png";

function page1() {
  return (
    <div className="boxx">
      <div className="bungkus">
        <div className="daun">
          <img src={daun} alt="IMG1" />
        </div>
        <div className="baris2_1">
          <div className="kaki">
            <img src={kaki} alt="IMG2" />
          </div>
          <div className="kain">
            <img src={kain} alt="IMG4" />
          </div>
        </div>
        <div className="baris3_1">
          <div className="tas">
            <img src={tas} alt="IMG3" />
          </div>
          <div className="batik">
            <img src={batik} alt="IMG5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page1;
