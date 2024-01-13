import "./stylepage18.css";
import AOS from 'aos';

function page18() {
  AOS.init({
    duration: 1000,
    once: false,
  });
  return (
    <div className="page18">
      <div className='page18SectionAtas'>
        <h1
          data-aos='zoom-in-left'
          className="condensedBold kalimatisi181"
          style={{ fontSize: "calc(136/1920*100vw)",lineHeight: '0.9',fontFamily:'National2CondensedBold' }}
        >
          Tidak hanya motif, warna <br/> yang digunakan pada <br/> tenun ikat juga memiliki <br/>
          makna masing-masing.
        </h1>
        <p
          data-aos='zoom-in-right'
          className="regular kalimatisi182"
          style={{fontSize: "calc(24/1920*100vw)",}}
        >
          Warna merah melambangkan siang dan warna hitam <br/> melambangkan malam. Kedua
          warna tersebut juga <br/> merepresentasikan kehidupan manusia yang baik dan
          jahat.
        </p>
      </div>
      <div className='page18SectionBawah'>
        <p
          className="regular kalimatisi183"
          style={{
            fontSize: "calc(24/1920*100vw)",
          }}
          data-aos='fade-up-left'
        >
          Motif dan warna tenun ikat masyarakat Kalimantan yang indah membuat <br/>
          warisan budaya ini dapat menjadi pilihan fesyen terkini dalam kehidupan <br/>
          sehari-hari yang melambangkan budaya nusantara.
        </p>
      </div>
    </div>
  );
}

export default page18;
