import "./stylepage12.css";
import bola from "../../assets/gambar1.png";

function page12() {
  return (
    <div className="page12">
      <img className="bola" src={bola} alt="" data-aos="zoom-out"/>
      <div className="isi12">
        <p className="condensedRegular header12" style={{ fontSize: "50px" }} data-aos="fade-down" data-aos-delay="300">
          A'raga masih bertahan sampai saat ini,
        </p>
        <h1
          className="condensedBold kalimatisi12"
          style={{
            fontSize: "110px",
            width: "75%",
            lineHeight: "1",
            marginTop: "3%",
          }}
          data-aos="fade-right"
          data-aos-delay="700"
        >
          tetapi lebih sering <br /> dimainkan di <br /> sanggar-sanggar atau{" "}
          <br />
          dijadikan sebagai objek <br /> pariwisata.
        </h1>
        <p
          className="regular footer12"
          style={{
            fontSize: "20px",
            width: "35%",
            marginTop: "6%",
            marginLeft: "40%",
          }}
          data-aos="fade-in"
          data-aos-delay="1000"
          data-aos-offset="100"
        >
          Namun permainan unik ini dapat menjadi opsi menarik saat  <i>Ultimates</i>
          bermain bola.
        </p>
      </div>
    </div>
  );
}

export default page12;
