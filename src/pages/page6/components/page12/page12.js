import "./stylepage12.css";
import bola from "../../assets/gambar1.png";
import AOS from "aos";

function page12() {
  AOS.init({
    duration: 1000,
    once: false,
  });
  return (
    <div className="page12">
      <img className="bola" src={bola} data-aos='flip-right'alt="" />
      <div className="isi12">
        <p className="condensedRegular header12" style={{ fontSize: "50px" }} data-aos='fade-left-custom'>
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
          data-aos='fade-left-custom' data-aos-delay='500'
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
          data-aos='fade-left-custom' data-aos-delay='800'
        >
          Namun permainan unik ini dapat menjadi opsi menarik saat  <i>Ultimates</i>
          bermain bola.
        </p>
      </div>
    </div>
  );
}

export default page12;
