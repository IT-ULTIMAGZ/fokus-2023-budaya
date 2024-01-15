import React from "react";
import bg from "../Assets/bg/BG_PAGE_8.png";
import stepLadder from "../Assets/illust/Step_and_Ladder.png";
import bullet from "../Assets/text/WHITE_BULLETS.png";

const Part6 = () => {
  return (
    <div
      className="mainbg"
      style={{
        background: "#096B49",
        position: "relative",
      }}
    >
      <div className="whiteleftbox" />
      <div className="rightDecoration">
        <img src={bg} className="props" alt="bg" />
      </div>
      <div className="leftDecoration">
        <img
          src={stepLadder}
          style={{ marginLeft: "18%" }}
          className="doubleBlock mirrored"
          alt="stepLadder"
        />
      </div>

      <div
        className="textwrapper"
        style={{
          position: "absolute",
          top: "25%",
          left: "10%",
          alignItems: "start",
        }}
        data-scroll-container
      >
        <div
          className="teks"
          data-scroll
          data-scroll-speed="0.2"
          data-scroll-direction="horizontal"
        >
          <div className="textSection">
            <img src={bullet} alt="bullet" />
            <p>
              <span className="unique same">BUDAYA NUSANTARA</span> Indonesia
              sangat <span className="unique same">KAYA DAN BERAGAM</span> jenisnya
              mulai dari seni tari, lagu, dan pakaian tradisional, mereka semua
              merupakan ciri khas, cerminan identitas, dan sejarah bangsa
              Indonesia. Tentunya semuanya masih tetap relevan di era modern
              ini.
            </p>
          </div>
          <div className="textSection noBullet">
            <img src={bullet} alt="bullet" />
            <p>
              <span className="unique same">
                MESKIPUN MASYARAKAT MENGALAMI PERUBAHAN DAN PERKEMBANGAN,{" "}
              </span>{" "}
              tetapi nilai-nilai budaya Indonesia harus tetap menjadi landasan
              identitas, kebanggaan, dan ciri khas bangsa. Budaya nusantara
              juga dapat menjadi sumber inspirasi terutama dalam bidang seni.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part6;
