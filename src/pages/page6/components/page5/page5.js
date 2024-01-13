import React from "react";
import bicaraSoal from "../../assets/bicaraSoal.svg";
import "./stylepage5.css";
import AOS from "aos";

function page5() {
  AOS.init({
    duration: 1000,
    once: false,
  });
  return (
    <div className="pembungkus">
      <div className="kiripage5">
        <div className="page5atas">
          <p data-aos='fade-right-custom'>
            Namun, adanya perubahan gaya hidup masyarakat Indonesia saat ini
            <br />
            mengakibatkan banyak budaya tradisional tersebut seakan memudar
            <br /> dan tertutup oleh berbagai tren yang dianggap lebih relevan.
          </p>
          <p className="descc" data-aos='fade-left-custom'>
            Padahal nilai-nilai budaya tradisional juga harus
            <br /> dilestarikan oleh masyarakat Indonesia karena itu juga
            <br /> menjadi bagian dari identitas bangsa Indonesia.
          </p>
        </div>
        <div className="page5bawah">
          <img src={bicaraSoal} data-aos='zoom-in-custom'alt=''/>
          <p className="hello" data-aos='fade-up-left'>
            Hal tersebut dapat dilakukan melalui cara sederhana, yaitu dengan
            <br />
            menerapkannya dalam kehidupan sehari-hari. Berikut adalah lima
            <br />
            produk budaya tradisional Indonesia benda dan tak benda yang
            <br /> dapat  <i>Ultimates</i> terapkan dalam kegiatan sehari-hari.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page5;
