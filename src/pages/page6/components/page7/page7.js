import React from "react";
import "./stylepage7.css";
import LocomotiveScroll from "locomotive-scroll";

function page7() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="pembungkuspage7">
      <div className="page7atas"></div>
      <div className="isipage7">
        <div className="descpage7" data-scroll data-scroll-speed='0.5'>
          <p>
            Corak dan warna udeng yang beragam juga menambah kesan indah
            <br /> bagi siapapun yang mengenakannya. Desainnya yang menarik
            <br /> membuat udeng bisa digunakan sebagai aksesoris sehari-hari.
          </p>
          <h1 data-aos="fade-up" data-aos-delay="700">
            Maka dari itu, udeng sering menjadi opsi
            <br /> solusi saat kondisi rambut sedang
            <br /> berantakan atau lagi <span>bad hair day.</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default page7;
