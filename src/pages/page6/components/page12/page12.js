import "./stylepage12.css";
import bola from "../../assets/gambar1.png";

function page12() {
  return (
    <div className="page12">
      <img className="bola" src={bola} alt="" />
      <div className="isi12">
        <p className="condensedRegular header12" style={{ fontSize: "50px" }}>
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
        >
          Namun permainan unik ini dapat menjadi opsi menarik saat Ultimates
          bermain bola.
        </p>
      </div>
    </div>
  );
}

export default page12;
