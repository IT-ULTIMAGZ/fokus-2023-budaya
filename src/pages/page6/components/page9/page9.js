import React from "react";
import satuMingguDuaBulan from "../../assets/satuMingguDuaBulan.svg";
import "./stylepage9.css";
import asset1 from "../../assets/Asset 1.svg";
import AOS from "aos";
function page9() {
  AOS.init({
    duration: 1000,
    once: false,
  });
  return (
    <div className="pembungkuspage9">
      <div className="page9atas"></div>
      <div className="page9isi">
        <p data-aos='fade-right-custom'>
          Pembuatan tikar pandan ini juga membutuhkan waktu yang bervariasi.
          <br />
          Untuk motif sederhana, dibutuhkan waktu dua hari untuk pembuatannya.{" "}
        </p>
        <h1 data-aos='fade-right-custom' data-aos-delay='500'>
          Sementara itu, pembuatan motif tikar pandan <br />
          yang lebih kompleks membutuhkan waktu selama
        </h1>
        <img data-aos='fade-right-custom' data-aos-delay='1000' src={satuMingguDuaBulan}/>
        <div className='page9IsiBawah'>
          <img src={asset1}/> 
          <p className="isibagianbawah" data-aos='fade-up-pop' data-aos-delay='1500'>
            Terlepas dari durasi pembuatannya, tikar pandan Serasan saat ini
            <br /> masih digunakan oleh masyarakat lokal untuk kegiatan
            sehari-hari
            <br /> sebagai alas untuk duduk dan tidur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page9;
