import React from "react";
import bg from "../Assets/bg/BG_PAGE_9.png";
import stepWhite from "../Assets/illust/Step_White.png";
import stepGreen from "../Assets/illust/Step_Green.png";
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
      <div className="whiterightbox" />
      <div className="leftDecoration">
        <img src={bg} className="props" alt="bg" />
      </div>
      <div
        className="rightDecoration"
        style={{ flexDirection: "row", marginRight: "4%", marginTop: "-2px" }}
      >
        <img src={stepWhite} className="singleBlock" alt="step" />
        <img src={stepGreen} className="singleBlock" alt="step" />
      </div>

      <div
        className="textwrapper"
        style={{
          marginTop: "10%",
          right: "15%",
        }}
        data-scroll-container
      >
        <div
          className="teks"
          data-scroll
          data-scroll-speed="0.2"
          data-scroll-direction="horizontal"
        >
          <div className="textSection noBullet">
            <img src={bullet} alt="bullet" />
            <p>
              Tidak sedikit anak muda Indonesia di zaman sekarang yang
              menghasilkan karya dengan masih tetap menambahkan unsur
              kebudayaan Indonesia, sehingga secara tidak langsung bisa lebih
              mengenalkan budaya Indonesia ke kancah internasional.
            </p>
          </div>
          <div className="textSection unique noBullet">
            <img src={bullet} alt="bullet" />
            <p>
              BUDAYA NUSANTARA KITA YANG UNIK PUN MENJADI DAYA TARIK BAGI
              WISATAWAN <span className="bolderText">LOKAL</span> MAUPUN <span className="bolderText">INTERNASIONAL.</span>
            </p>
          </div>
          <div className="textSection noBullet">
            <img src={bullet} alt="bullet" />
            <p>
              Budaya kita juga dapat memperkuat hubungan dan kesatuan seluruh
              masyarakat Indonesia. Alhasil, penting bagi kita sebagai
              masyarakat Indonesia untuk terus menghargai dan melestarikan
              budaya nusantara Indonesia meski dihadapi perubahan zaman.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part6;
