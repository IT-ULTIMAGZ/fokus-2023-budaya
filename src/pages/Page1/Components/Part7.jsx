import React from "react";
import bg from "../Assets/bg/BG_PAGE_7.png";
import bullet from "../Assets/text/BLACK_BULLETS.png";

const Part6 = () => {
  return (
    <div
      className="mainbg"
      style={{
        background: "#ffaf00",
        position: "relative",
      }}
    >
      <div className="whiterightbox" />
      <div className="leftDecoration">
        <img src={bg} className="props" alt="bg" />
      </div>

      <div className="textwrapper">
        <h1 className="penulis" data-aos="fade-zoom-in">
          GABRIELLA TANZIL, UMN, MANAJEMEN 2021
        </h1>
        <div className="teks black" data-aos="fade-down">
          <div className="textSection">
            <img src={bullet} alt="bullet" />
            <p>
              Tentu saja bangga. Keragaman budaya Indonesia itu luar biasa
              karena memiliki warisan sejarah, kesenian, tradisi, adat istiadat,
              pakaian, kekayaan seni yang unik, dan bahasa yang beragam. Semua
              keragaman budaya ini memberikan identitas yang kuat bagi
              Indonesia sebagai negara yang kaya akan warisan budaya.
            </p>
          </div>
          <div className="textSection unique noBullet">
            <img src={bullet} alt="bullet" />
            <p>
              <span className="regularFont">MAKA DARI ITU,</span> PENTING UNTUK SELURUH MASYARAKAT INDONESIA
              MENDUKUNG SERTA MELESTARIKAN <span>KEBERAGAMAN</span> INI.
            </p>
          </div>
          <div className="textSection noBullet">
            <img src={bullet} alt="bullet" />
            <p>
              Sudah sepatutnya masyarakat Indonesia mengapresiasi dan menjaga
              keberagaman budaya nusantara agar dapat tetap hidup dan dihargai
              oleh generasi mendatang di masa depan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part6;
