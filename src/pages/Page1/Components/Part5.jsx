import React from "react";
import bg from "../Assets/bg/BG_PAGE_5.png";
import bullet from "../Assets/text/WHITE_BULLETS.png";

const Part5 = () => {
  return (
    <div
      className="mainbg"
      style={{
        background: "#096B49",
        position: "relative",
      }}
    >
      <div className="whiterightbox" />
      <div className="leftDecoration">
        <img src={bg} className="props" alt="bg" />
      </div>

      <div
        className="textwrapper"
      >
        <h1 className="penulis" data-aos="fade-zoom-in">
          DANIEL NICHOLLAS, UMN, AKUNTANSI 2021
        </h1>
        <div className="teks" data-aos="fade-down">
          <div className="textSection">
            <img src={bullet} alt="bullet"/>
            <p>
              Saya merasa bangga karena dengan beraneka ragam budaya tersebut,
              kita dapat mengalami perbedaan. Dari perbedaan itu dapat
              mengembangkan berbagai ide yang beraneka ragam pula. Hal itu guna
              mengembangkan sekaligus memperluas pengetahuan dan kesatuan dalam
              negara.
            </p>
          </div>
          <div className="textSection unique">
            <img src={bullet} alt="bullet" />
            <p>
              BUDAYA KITA SEKARANG INI SEDANG MENGALAMI <span>PENURUNAN.</span> MENURUT SAYA
              HAL ITU DIAKIBATKAN MASYARAKAT YANG SUDAH MULAI <span>KURANG PEDULI </span>
              TERHADAP BUDAYA SENDIRI, APALAGI MASUKNYA BUDAYA LUAR NEGARA YANG
              TERUS-MENERUS.
            </p>
          </div>
          <div className="textSection noBullet">
            <img src={bullet} alt="bullet" />
            <p>
              Di era sekarang, banyak budaya yang sudah tidak lagi dikembangkan
              karena dari masyarakatnya sendiri merasa bahwa budaya-budaya
              tradisional kurang sesuai dengan apa yang mereka percayai, atau
              sudah tidak sesuai dengan zaman sekarang.
            </p>
          </div>
          <div className="textSection">
            <img src={bullet} alt="bullet" />
            <p>
              Tantangannya adalah keinginan masyarakatnya sendiri untuk
              mengembangkan budaya nusantara.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part5;
