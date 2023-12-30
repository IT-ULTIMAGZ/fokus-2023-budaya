import React from "react";
import "./stylepage6.css";
import daun from "../../assets/gambar6.png";

function page6() {
  return (
    <div className="pembungkuss">
      <div className="page6atas"></div>
      <div className="page6tengah">
        <div className="tengahkiri">
          <div className="tengahkirifoto">
            <img src={daun} alt="UDENG KHAS BALI"></img>
          </div>
          <h1>
            UDENG
            <br /> KHAS
            <br /> BALI
          </h1>
        </div>
        <div className="tengahkanan">
          <div className="melansir">
            <p>
              Melansir dari <br />
              <i> indonesia.go.id,</i>
            </p>
          </div>
          <div className="deskripsiudeng">
            <h1>
              Udeng merupakan<span> pengikat kepala</span> yang terbuat
              <br /> dari kain dan biasanya digunakan oleh pria Bali.
              <br /> Pengikat kepala ini memiliki makna sebagai simbol
              <br /> dari<span> ngiket manah</span> atau pemusatan pikiran.
            </h1>
            <p>
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
