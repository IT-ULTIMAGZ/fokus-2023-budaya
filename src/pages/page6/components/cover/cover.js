import React from "react";
import "./stylecover.css";

function cover() {
  return (
    <div className="box">
      <div className="baris1 baris">
        <div className="telisik5">
          <h1 data-aos="fade-right">TELISIK 5 WARISAN</h1>
        </div>
        <div className="budaya">
          <h1 data-aos="fade-down">BUDAYA</h1>
        </div>
      </div>
      <div className="baris2 baris">
        <div className="batik1"></div>
        <div className="benda">
          <h1 data-aos="fade-zoom-in">BENDA & TAK BENDA</h1>
        </div>
        <div className="namaorg">
          <div className="namapenulis" data-aos="fade-left" data-aos-delay="500">
            <p>Penulis:</p>
            <h5>Wynnie Saputri Jansen</h5>
          </div>
          <div className="namapenulis" data-aos="fade-left" data-aos-delay="500" >
            <p>Editor:</p>
            <h5>Michael Ludovico</h5>
          </div>
        </div>
      </div>
      <div className="baris3 baris">
        <div className="indonesia">
          <h1 data-aos="fade-right">INDONESIA</h1>
        </div>
        <div className="untuk">
          <h1 data-aos="fade-up">UNTUK</h1>
        </div>
      </div>
      <div className="baris4 baris" data-aos="fade-left" data-aos-offset="1 00px">
        <div className="batik2"></div>
        <div className="kehidupan">
          <h1>KEHIDUPAN SEHARI-HARI</h1>
        </div>
      </div>
    </div>
  );
}

export default cover;
