import "./stylepage16.css";
import kain from "../../assets/gambar3.png";

function page16() {
  return (
    <div className="page16">
      <img className="tenun16" src={kain} alt="" />
      <div className="isi16">
        <h1
          className="condensedBold kalimatisi161"
          style={{ fontSize: "72px", width: "69%" }}
        >
          Tenun ikat adalah kain tradisional khas masyarakat Dayak yang berada
          di
        </h1>
        <h1
          className="condensedBold kalimatisi162"
          style={{ fontSize: "72px", marginLeft: "50%" }}
        >
          Kalimantan Barat.
        </h1>
        <p
          className="regular footer16"
          style={{ fontSize: "20px", width: "50%", marginTop: "6%" }}
        >
          Motif dan warna pada tenun ikat yang indah memiliki berbagai makna dan
          menyimpan sejumlah pesan dari para leluhur.
        </p>
      </div>
    </div>
  );
}

export default page16;
