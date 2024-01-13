import "./stylepage16.css";
import kain from "../../assets/gambar3.png";
import tenunIkat from "../../assets/tenunIkat.svg";
import kabupatenSintang from "../../assets/kabupatenSintang.svg";
import AOS from 'aos';
import LocomotiveScroll from "locomotive-scroll";


function page16() {
  AOS.init({
    duration: 1000,
    once: false,
  });
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="page16">
      <div className='page16SectionKanan' data-scroll data-scroll-speed='0.7'>
        <img className="tenun16" src={kain} alt="" />
        <img className='tenun16Text' src={tenunIkat} alt="" />
      </div>
      <div className="isi16">
        <div>
          <h1
            className="condensedBold kalimatisi161"
            style={{ fontSize: "calc((88/1920)*100vw)", width: "69%" }}
            data-aos='fade-right-custom'
          >
            Tenun ikat adalah kain <br/> tradisional khas masyarakat <br/> Dayak yang berada
            di
          </h1>
          <img className="kabupatenSintang" src={kabupatenSintang}al='' data-aos='fade-up-right-custom'/>
        </div>
        <p
          className="condensedBold kalimatisi162"
          style={{ fontSize: "calc(88/1920*100vw)", marginLeft: "45%" }}
          data-aos='fade-up-custom'
        >
          Kalimantan Barat.
        </p>
        <p
        data-aos='fade-up-custom'
          className="regular footer16"
          style={{ fontSize: "calc((24/1920)*100vw)", width: "50%", marginTop: "3vh" }}
        >
          Motif dan warna pada tenun ikat yang indah memiliki berbagai makna dan
          menyimpan sejumlah pesan dari para leluhur.
        </p>
      </div>
    </div>
  );
}

export default page16;
