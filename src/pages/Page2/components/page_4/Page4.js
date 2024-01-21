import React from "react";
import "./stylePage4.css";
import Gambar4 from "../../assets/Asset_9.png";

function page4() {
  return (
    <div className="background4">
      <div className="content4">
        <div className="image4" data-scroll-container>
          <img
            src={Gambar4}
            data-scroll
            data-scroll-speed="0.4"
            data-scroll-direction="horizontal"
          ></img>
        </div>
        <div className="tulisan4" data-aos="fade-down">
          <p
            style={{
              fontFamily: "National2Medium",
              fontSize: "1.56vw",
              marginBottom: "0px",
            }}
          >
            Kain tradisional populer lainnya juga memiliki sejarah mereka <br />
            masing-masing. Misalnya, kain songket asal Sumatera Selatan <br />
            yang warna utamanya cenderung merah dan emas. Melansir <br />
            <i
              style={{ fontFamily: "National2LightItalic", fontSize: "1.56vw" }}
            >
              batam.tribunnews.com,
            </i>{" "}
            hal ini disebabkan perkembangan tradisi <br />
            Cina yang melambangkan warna merah sebagai keberanian dan <br />
            emas sebagai kekayaan, kejayaan, dan kemakmuran.
          </p>{" "}
          <br></br>
          <p style={{ fontFamily: "National2Medium", fontSize: "1.56vw" }}>
            Selain sejarah dan coraknya, hal yang menjadikan kain Indonesia
            beragam adalah bahan dasarnya. Beberapa kain tradisional terbuat
            dari bahan-bahan di alam seperti kayu atau daun tertentu.
          </p>
          <p
            style={{
              fontFamily: "Natonal2Light",
              fontSize: "1.04vw",
              letterSpacing: "0.1px",
            }}
          >
            Contohnya, kain ulap doyo Kalimantan Timur yang terbuat dari daun
            doyo yang dikeringkan dan dijadikan serat halus. Terdapat pula tenun
            sekomandi Sulawesi Barat yang terbuat dari tumbukan kulit kayu.
            Masyarakat suku Sobey, Papua, juga memiliki tenun terfo yang terbuat
            dari anyaman daun nipah muda
          </p>
        </div>
      </div>
    </div>
  );
}

export default page4;
