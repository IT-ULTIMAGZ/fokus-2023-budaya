import React from "react";
import bg from "../Assets/bg/BG_PAGE_6.png";
import bullet from "../Assets/text/WHITE_BULLETS.png";

const Part6 = () => {
  return (
    <div
      className="mainbg"
      style={{
        background: "#ef4f55",
        position: "relative",
        // backgroundImage: `url(${bg})`,
        // backgroundPosition: "center",
        // backgroundSize: "contain",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <div className="whiteleftbox" />
      <div className="rightDecoration">
        <img src={bg} className="props" alt="bg" />
      </div>

      <div
        className="textwrapper"
        style={{ position: "absolute", left: "10%", alignItems: "start" }}
      >
        <h1 className="penulis" data-aos="fade-zoom-in">
          AKELA NAJILA, UMN, DKV 2021
        </h1>
        <div className="teks" data-aos="fade-down">
          <div className="textSection">
            <img src={bullet} alt="bullet" />
            <p>
              Sangat bangga, karena bila membahas tentang kekayaan indonesia,
              harta alam juga budaya, seperti tidak ada habisnya. Nyatanya,
              masih banyak budaya unik yang harus dipelajari dan masih ada
              banyak kekayaan alam yang harus dijelajahi.
            </p>
          </div>
          <div className="textSection unique">
            <img src={bullet} alt="bullet" />
            <p>
              KITA HARUS MENGHARGAI BUDAYA INDONESIA. SEBAB, ITU MERUPAKAN ILMU
              PENINGGALAN NENEK MOYANG KITA. MENURUT SAYA,{" "}
              <span>BUDAYA KITA MASIH SANGAT RELEVAN,</span> HINGGA SANGAT
              PENTING UNTUK DILESTARIKAN.
            </p>
          </div>
          <div className="textSection">
            <img src={bullet} alt="bullet" />
            <p>
              Menurut saya tantangan terbesar muncul dari era perkembangan
              zaman. Banyaknya pertukaran budaya antar warga lokal Indonesia dan
              warga asing terkadang membuat kami menjadi lupa budaya sendiri.
              Sebab, masih sulit menemukan keseimbangan antara modernitas dan
              tradisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part6;
