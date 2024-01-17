import React from "react";
import bgl from "../Assets/bg/BG_PAGE_10_L.png";
import bgr from "../Assets/bg/BG_PAGE_10_R.png";
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
      {/* <div className="whiteleftbox" /> */}
      <div className="leftDecoration">
        <img src={bgl} className="props" alt="bg" />
      </div>
      <div className="rightDecoration">
        <img src={bgr} className="props" alt="bg" />
      </div>

      <div
        className="textwrapper"
        style={{
          position: "absolute",
          marginTop: "3%",
          left: "10%",
          alignItems: "start",
        }}
        data-scroll-container
      >
        <div
          className="teks black"
          data-scroll
          data-scroll-speed="0.2"
          data-scroll-direction="horizontal"
        >
          <div className="textSection unique">
            <img src={bullet} alt="bullet" />
            <p>
              TANTANGAN TERBESAR BAGI ANAK MUDA INDONESIA YAKNI ADANYA PENGARUH
              DARI BUDAYA ASING YANG MASUK MELALUI{" "}
              <span className="primary">
                MEDIA,TEKNOLOGI, DAN JUGA INTERAKSI
              </span>{" "}
              YANG TERJADI SECARA INTERNASIONAL.
            </p>
          </div>
          <div className="textSection noBullet">
            <img src={bullet} alt="bullet" />
            <p>
              Upaya yang dapat masyarakat lakukan untuk dapat mempertahankan
              tradisi, ciri khas, dan nilai-nilai budaya lokal dapat menjadi
              lebih rumit disebabkan oleh pengaruh dan tuntutan untuk mengikuti
              gaya hidup yang modern serta arus global yang cepat.
            </p>
          </div>
          <div className="textSection noBullet">
            <img src={bullet} alt="bullet" />
            <p>
              <span className="unique same">
                OLEH SEBAB ITU, KRUSIAL SEKALI BAGI ANAK MUDA
              </span>{" "}
              untuk tetap menghargai dan memahami warisan budaya nusantara
              Indonesia, serta turut berperan aktif dalam mempromosikan budaya
              nusantara agar tetap selaras dengan zaman yang telah berubah.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part6;
