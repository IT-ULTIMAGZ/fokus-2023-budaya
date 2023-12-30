import React from "react";
import "./stylepage10.css";
import kaki from "../../assets/gambar1.png";

function page10() {
  return (
    <div className="pembungkuspage10">
      <div className="page10kiri">
        <img src={kaki} alt="MARAGA"></img>
      </div>
      <div className="page10kanan">
        <div className="page10atas"></div>
        <div className="page10isi">
          <div className="descpage10">
            <p>
              merupakan permainan ketangkasan dengan menggunakan bola <br />
              yang terbuat dari anyaman rotan yang disebut raga.
            </p>
          </div>
          <div className="penjelasanpage10">
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
