import "./stylepage15.css";

function page15() {
  return (
    <div className="page15">
      <div className="header15">
        <div data-aos="fade-right" data-aos-delay="2000">
          <span className="regular">Mengutip dari </span>
          <span className="regularItalic">travel.tempo.co,</span>
        </div>
      </div>
      <div className="isi15">
        <div style={{ marginTop: '6vh' }}>
          <span className="regular kalimatisi151" data-aos="fade-down">
            masyarakat Papua juga percaya bahwa
          </span>
        </div>
        <h1
          className="condensedBold kalimatisi152"
          style={{ fontSize: "4vw", width: "65%", marginTop: "0" }}
          data-aos="zoom-out"
          data-aos-delay="500"
        >
          anak perempuan yang dapat membuat noken dianggap sudah dewasa dan
          mampu mengatur rumah tangganya dengan baik.
        </h1>
        <p
          className="regular kalimatisi153"
          style={{
            fontSize: "1.388vw",
            // width: "",
            marginTop: "3%",
            marginLeft: "23%",
          }}
          data-aos="fade-left"
          data-aos-delay="1500"
          data-aos-offset="50"
        >
          Oleh karena itu, orang tua di Papua mengajarkan anak <br/> perempuannya
          untuk membuat noken, sehingga <br/> mereka dapat membuatnya sendiri.
        </p>
        <p
          className="regular footer15"
          style={{ fontSize: "1.388vw"}}
          data-aos="fade-up"
          data-aos-delay="2000"
          data-aos-offset="100"
        >
          Saat ini, warna dan model noken semakin bervariasi sehingga kerap <br/>
          dijadikan buah tangan oleh para wisatawan saat berkunjung ke Papua.<br/>
          Tas noken buatan masyarakat Papua ini dapat menjadi pilihan Ultimates<br/>
          untuk membawa barang dalam kegiatan sehari-hari.{" "}
        </p>
      </div>
    </div>
  );
}

export default page15;
