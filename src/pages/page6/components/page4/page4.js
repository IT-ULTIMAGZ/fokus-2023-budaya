import React from "react";
import "./stylepage4.css";

function page4() {
  return (
    <div className="boxxess">
      <div className="kiri">
        <div className="kiriatas">
          <h1 data-aos="zoom-out"> 
            Indonesia dikenal dengan <br /> keragaman dan keunikan <br />{" "}
            budayanya.
          </h1>
          <p data-aos="fade-zoom-in" data-aos-delay="300" data-aos-offset="50">
            Buktinya, Kementerian Pendidikan, Kebudayaan, Riset, dan <br />{" "}
            Teknologi mencatat terdapat 1.728 Warisan Budaya Takbenda <br />{" "}
            (WBTb) di Indonesia pada periode 2013 sampai 2022.
          </p>
        </div>
        <div className="kiribawah"></div>
      </div>
      <div className="kanan">
        <div className="kananatas row">
          <h5 data-aos="fade-zoom-in" data-aos-delay="700">Jumlah tersebut terdiri dari</h5>
          <div className="col-6 mt-0 aaa">
            <h1 data-aos="fade-zoom-in" data-aos-delay="900">491</h1>
            <p data-aos="fade-zoom-in" data-aos-delay="2000">
              Warisan budaya dalam <br /> domain Adat Istiadat <br />{" "}
              Masyarakat, Ritus, dan <br />
              Perayaan-Perayaan
            </p>
          </div>
          <div className="col-6 mt-0 aaa">
            <h1 data-aos="fade-zoom-in" data-aos-delay="1100">440</h1>
            <p data-aos="fade-zoom-in" data-aos-delay="2000">
              Warisan budaya dalam <br /> domain Kemahiran dan <br /> Kerajinan
              Tradisional
            </p>
          </div>
          <div className="col-6 mt-0 aaa">
            <h1 data-aos="fade-zoom-in" data-aos-delay="1300">503</h1>
            <p data-aos="fade-zoom-in" data-aos-delay="2000">
              Warisan budaya dalam <br /> domain Seni <br />
              Pertunjukan
            </p>
          </div>
          <div className="col-6 mt-0 aaa">
            <h1 data-aos="fade-zoom-in" data-aos-delay="1500">219</h1>
            <p data-aos="fade-zoom-in" data-aos-delay="2000">
              Warisan budaya dalam <br />
              domain Tradisi Lisan <br />
              dan Ekspresi
            </p>
          </div>
          <div className="col-9 mt-0 aaa">
            <h1 data-aos="fade-zoom-in" data-aos-delay="1700">75</h1>
            <p data-aos="fade-zoom-in" data-aos-delay="2000" data-aos-offset="50">
              Warisan budaya dalam domain
              <br /> Pengetahuan dan Kebiasaan Perilaku <br />
              Mengenai Alam dan Semesta
            </p>
          </div>
        </div>
        <div className="kananbawah"></div>
      </div>
    </div>
  );
}

export default page4;
