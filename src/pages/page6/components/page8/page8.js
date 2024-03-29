import React from "react";
import "./stylepage8.css";
import batik from "../../assets/gambar4_1.png";
import tikarPandan from '../../assets/tikarPandan.svg';
import AOS from "aos";
import LocomotiveScroll from "locomotive-scroll";

function page8() {
  AOS.init({
    duration: 1000,
    once: false,
  });
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="pembungkuspage8">
      <div className="page8atas"></div>
      <div className="page8isi">
        <div className="page8kiri">
          <div className="page8isiatas">
            <h1 data-aos='fade-right-custom'>
              Tikar pandan adalah kerajinan tangan khas
              <br />
              masyarakat <span>kabupaten Natuna, Riau</span>. Sesuai
              <br /> dengan namanya, tanaman pandan menjadi bahan
              <br />
              utama dari kerajinan tangan ini.
            </h1>
          </div>
          <div className="page8isibawah">
            <div className="page8bawahkiri" data-aos="fade-left" data-aos-delay="1000">
              <p>
                Melansir dari
                <br /> <i>anambasnews.com,</i>{" "}
              </p>
            </div>
            <div className="page8bawahkanan">
              <p data-aos='fade-up-pop'>
                kabupaten Natuna terkenal akan kekayaan pandannya. Masyarakat{" "}
                <br />
                setempat sudah secara turun temurun memanfaatkan tanaman
                <br /> pandan untuk dijadikan kerajinan tangan. Anyaman tikar
                memiliki
                <br /> ragam motif seperti motif beragi biasa, motif dam, motif
                sasak, motif
                <br />
                sentang tanah merah, dan lain sebagainya.
              </p>
            </div>
          </div>
        </div>
        <div className="page8kanan" data-scroll data-scroll-speed='0.7'>
          <div className="page8kananatas">
            <img src={batik}></img>
          </div>
          <div className="page8kananbawah">
            <img src={tikarPandan}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page8;
