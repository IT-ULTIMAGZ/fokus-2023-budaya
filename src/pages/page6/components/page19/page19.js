import "./stylepage19.css";
import AOS from "aos";
function page19() {
  AOS.init({
    duration: 1000,
    once: false,
  });
  return (
    <div className="page19">
      <div className="page19Section1">
        <p
          data-aos='fade-right-custom'
          className="kalimatisi191"
          style={{ fontSize: "calc(24/1920*100vw)",fontFamily:'National2Regular',lineHeight:'1.2',letterSpacing:'calc(1.15/1920*100vw)' }}
        >
          Nah, itu dia lima budaya benda dan tak benda <br/> masyarakat Indonesia yang
          masih relevan untuk <br/>  <i>Ultimates</i> gunakan di era sekarang.
        </p>
      </div>
      <div className="page19Section2">
        <p
          data-aos='fade-left-custom'
          data-aos-delay='300'
          className="regular kalimatisi192"
          style={{ fontSize: "calc(24/1920*100vw)",letterSpacing:'calc(2/1920*100vw)' ,fontFamily:'National2Regular',lineHeight:'1.2'}}
        >
          Selain memiliki nilai guna, pengimplementasian budaya-budaya <br/> tersebut
          dalam kehidupan sehari-hari juga dapat menjadi upaya <br/> memperkenalkannya
          ke khalayak luar.
        </p>
      </div>
      <div className="page19Section3">
        <h1
        data-aos='fade-right-custom'
        data-aos-delay='600'
          className="condensedBold kalimatisi193"
          style={{ fontSize: "calc(88/1920*100vw)" }}
        >
          Dari kelima budaya yang
          <br /> sudah disebutkan di atas,
        </h1>
      </div>
      <div className="page19Section4" >
        <p 
          data-aos-delay='900'
          data-aos='fade-left-custom'
          data-aos-offset='-200'
          className="condensedBoldItalic kalimatisi194"
          style={{ fontSize: "calc(88/1920*100vw)", lineHeight: "1.2" }}>
          Ultimates{" "}
            <span className="condensedBold">sudah pernah <br/> mencoba yang mana?</span>
        </p>
      </div>
      <div
       
      >
      </div>
    </div>
  );
}

export default page19;
