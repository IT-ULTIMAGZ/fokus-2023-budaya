import React from "react";
import garis from "../Assets/bg/SUPERGRAFIS PAGE3-4.png";

const Part3 = () => {
  return (
    <div
      className="mainbg"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="bgkoin" data-scroll-container>
        <img className="gariskoin" src={garis} alt="garis" />
        <div
          className="wrapperkoin"
          data-scroll
          data-scroll-speed="0.6"
          data-scroll-direction="horizontal"
        >
          <h1 className="headerkoin">01</h1>
          <h3 className="tekskoin">
            Budaya Tanah Air sangat beragam mulai dari ujung Sabang sampai
            Merauke. Apakah kamu bangga dengan keberagaman budaya Indonesia?
          </h3>
        </div>
      </div>
      <div className="spacerkoin" />
      <div className="bgkoin" data-scroll-container>
        <img className="gariskoin" src={garis} alt="garis" />
        <div
          className="wrapperkoin"
          data-scroll
          data-scroll-speed="0.5"
          data-scroll-direction="horizontal"
        >
          <h1 className="headerkoin">02</h1>
          <h3 className="tekskoin">
            Apa persepsi kamu mengenai budaya nusantara Indonesia? Entah itu
            seni, tari, lagu, pakaian. Dan apakah budaya kita masih relevan bila
            dilihat di era modern seperti saat ini?
          </h3>
        </div>
      </div>
      <div className="spacerkoin" />
      <div className="bgkoin" data-scroll-container>
        <img className="gariskoin" src={garis} alt="garis" />
        <div
          className="wrapperkoin"
          data-scroll
          data-scroll-speed="0.4"
          data-scroll-direction="horizontal"
        >
          <h1 className="headerkoin">03</h1>
          <h3 className="tekskoin">
            Menurut kamu, apa tantangan terbesar bagi anak muda Indonesia untuk
            menjaga atau melestarikan budaya nusantara di tengah gempuran
            globalisasi?
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Part3;
