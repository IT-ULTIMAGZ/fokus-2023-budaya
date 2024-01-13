import React from "react";
import "./stylepage6.css";
import daun from "../../assets/gambar6.png";
import udengBali from "../../assets/udengBali.svg";
import AOS from "aos";
import LocomotiveScroll from "locomotive-scroll";

function page6() {
  AOS.init({
    duration: 1000,
    once: false,
  });
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="pembungkuss">
      <div className="page6atas"></div>
      <div className="page6tengah">
        <div className="tengahkiri">
          <div className="tengahkirifoto" >
            <img src={daun} alt="UDENG KHAS BALI" data-scroll data-scroll-speed='0.3'></img>
          </div>
          <img src={udengBali} data-scroll data-scroll-speed='0.2'/>
        </div>
        <div className="tengahkanan">
          <div className="melansir" data-aos="fade-left" data-aos-delay="1000">
            <p>
              Melansir dari <br />
              <i> indonesia.go.id,</i>
            </p>
          </div>
          <div className="deskripsiudeng">
            <h1 data-aos='fade-left-custom'>
              Udeng merupakan<span> pengikat kepala</span> yang terbuat
              <br /> dari kain dan biasanya digunakan oleh pria Bali.
              <br /> Pengikat kepala ini memiliki makna sebagai simbol
              <br /> dari<span> ngiket manah</span> atau pemusatan pikiran.
            </h1>
            <p data-aos='fade-up-pop'>
              Udeng di Bali dapat ditemui dengan berbagai corak dan bentuk yang
              memiliki
              <br /> maknanya masing-masing. Biasanya, udeng memiliki bentuk
              yang tidak
              <br /> simetris. Sisi kanan udeng memiliki lekukan dan kerap
              ditinggikan. Hal itu
              <br /> memiliki makna sebagai pendorong atau motivasi untuk
              pemakainya agar
              <br /> selalu berusaha melakukan kebaikan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page6;
