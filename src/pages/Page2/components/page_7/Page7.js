import React from "react";
import "./stylePage7.css";
import Gambar7 from "../../assets/Asset_12.png";

function page7() {
  return (
    <div className="background7">
      <div className="judul7" style={{ backgroundColor: "rgb(255,174,0)" }}>
        <p
          data-aos="fade-right"
          style={{
            fontFamily: "National2CompressedMedium",
            fontSize: "7.638vw",
            lineHeight: "1",
            color: "rgb(9,107,71)",
          }}
        >
          MELANSIR{" "}
          <i
            style={{
              fontFamily: "National2CompressedMedium",
              fontSize: "7vw",
              lineHeight: "1",
              color: "rgb(9,107,71)",
            }}
          >
            CNNINDONESIA.COM
          </i>{" "}
          , <br />
          33 KAIN TERSEBUT ANTARA LAIN:
        </p>
      </div>
      <div className="box7" data-scroll-container>
        <div
          className="image7"
          data-aos="fade-down"
        >
          <img src={Gambar7}></img>
        </div>
        <div className="isi7" data-aos="fade-zoom-in">
          <p
            style={{
              fontFamily: "National2Regular",
              fontSize: "1.38vw",
              lineHeight: "1",
              color: "rgb(9,107,71)",
              marginTop: "5vh",
            }}
          >
            Selain kain-kain tersebut, masih banyak kain di Indonesia yang corak
            dan maknanya mewakili kebudayaan masyarakat. Menjaga eksistensi kain
            tradisional bukan
            <br />
            hanya peran pemerintah dan lembaga resmi lainnya, melainkan juga
            sebagai warga negara untuk menjadikan kain sebagai bagian dari hidup
            berbudaya
          </p>
        </div>
      </div>
    </div>
  );
}

export default page7;
