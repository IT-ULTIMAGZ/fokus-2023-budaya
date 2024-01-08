import React from "react";
import "./stylePage3.css";
import Gambar3 from "../../assets/Asset_6.png";

function page3() {
  return (
    <div className="background3">
      <div className="content3">
        <div className="tulisan" data-aos="fade-down">
          <div className="judul">
            <h1
              style={{
                fontFamily: "National2CompressedBold",
                fontSize: "5.02vw",
              }}
            >
              MENELISIK KAIN <br />
              DARI BERBAGAI PULAU <br />
              DI INDONESIA
            </h1>
          </div>
          <div className="isi">
            <p
              style={{
                fontFamily: "National2Regular",
                fontSize: "1.01vw",
                letterSpacing: "0.5px",
              }}
            >
              {" "}
              Masing-masing daerah di Indonesia memiliki corak dan jenis kain
              mereka <br />
              tersendiri. Keberagaman kain ini dipengaruhi oleh sejarah daerah
              setempat. <br />
              Misalnya, kain batik yang berkembang seiring dengan perkembangan
              Kerajaan <br />
              Majapahit dan Mataram di daerah Jawa.
            </p>

            <br></br>
            <p
              style={{
                fontFamily: "National2Regular",
                fontSize: "1.01vw",
                letterSpacing: "0.5px",
              }}
            >
              Batik adalah adat istiadat turun menurun, sehingga corak batik
              dapat <br />
              menunjukkan asal usul atau status orang yang mengenakan. Oleh
              karena itu, <br />
              terdapat beberapa corak batik yang hanya bisa dikenakan oleh
              keluarga <br />
              bangsawan, seperti batik parang keluarga Keraton Yogyakarta
            </p>
          </div>
        </div>
        <div className="image3" data-scroll-container>
          <img
            src={Gambar3}
            data-scroll
            data-scroll-speed="0.1"
            data-scroll-direction="horizontal"
          ></img>
        </div>
        <div className="boxKosong"></div>
      </div>
    </div>
  );
}

export default page3;
