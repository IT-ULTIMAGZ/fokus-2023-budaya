import "./stylepage11.css";
import AOS from "aos";
function page11() {
  AOS.init({
    duration: 1000,
    once: false,
  });
  return (
    <div className="page11">
      <div className="header11">
        <div data-aos="fade-left" data-aos-delay="300">
          <span className="regular">Berdasarkan </span>
          <span className="regularItalic">travel.kompas.com</span>
        </div>
        <div className="isiHeader" style={{ fontSize: "18px" }}>
          <span className="regular" data-aos='zoom-in-custom'>
            Raga akan didoakan terlebih dahulu oleh guru atau pemain senior
            sebelum dimainkan. Hal ini dilakukan untuk menjaga kekompakkan dan
            keselamatan dari para pemain selama permainan.
          </span>
        </div>
      </div>
      <div className="isi11">
        <div
          className="kalimatisi1"
          style={{ fontSize: "18px", paddingLeft: "6%" }}
        >
          <p className="regular" data-aos='fade-up-right-custom' >
            Aturan bermain a'raga sendiri cukup sederhana, yaitu
          </p>
        </div>
        <div
          className="kalimatisi2"
          style={{
            fontSize: "72px",
            paddingLeft: "15%",
            lineHeight: "1.2",
            paddingTop: "1%",
          }}
          data-aos="zoom-out" data-aos-delay="1000"
        >
          <p className="condensedBold" data-aos='zoom-in-custom' data-aos-delay='500'>
            setiap pemain harus mengoper raga dan menjaga agar raga tidak jatuh
            ke tanah tanpa memegangnya.
          </p>
        </div>
        <div
          className="kalimatisi3"
          style={{ fontSize: "18px", paddingLeft: "15%", paddingTop: "4%" }}
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <p className="regular">
            Pemain yang menjatuhkan raga dianggap kalah dan tidak boleh
            melanjutkan permainan.
          </p>
        </div>
      </div>
      <div className="footer11">
        <p
          className="regular isifooter"
          style={{ fontSize: "calc(18/1920*100vw)", paddingTop: "2%", paddingLeft: "35%" }}
          data-aos='fade-up' data-aos-delay='800'
        >
          Terdapat unsur olahraga dan seni dalam tata cara bermainnya. Lalu,
          permainan ini biasanya diiringi oleh alat musik tradisional khas Bugis
          dan para pemain akan menari mengikuti iringan musik sembari
          memantul-mantulkan raga.
        </p>
      </div>
    </div>
  );
}

export default page11;
