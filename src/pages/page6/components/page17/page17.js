import "./stylepage17.css";
import motifTuai from "../../assets/motifTuai.svg";
import motifSakral from "../../assets/motifSakral.svg";
import asset4 from "../../assets/Asset4.svg";
function page17() {
  return (
    <div className="page17">
      <div className="header17">
        <div style={{ width: "60%" }}        
        data-aos="fade-right"
        data-aos-delay="500">
          <span className="regular">Mengutip dari </span>
          <span className="regularItalic">volkpop.co</span>
        </div>
      </div>
      <div className="isi17">
        <h1
          className="condensedBold kalimatisi171"
          data-aos='fade-down'
        >
          terdapat dua kategori motif pada kain ini.
        </h1>
        <div className="jenisMotif" data-aos='fade-down-custom'>
          <img src={motifSakral}/>
          <img src={motifTuai}/>
        </div>
        <div className="kalimatisi172">
          <span className="regular" style={{fontSize:'calc(20/1920*100vw)'}}>berbentuk reptil atau manusia,</span>
          <span className="regular" style={{fontSize:'calc(20/1920*100vw)', marginLeft: "26.5vw" }}>
            dengan bentuk <span className="bold">merijam</span> serta{" "}
            <span className="bold">ruit.</span>
          </span>
        </div>
        <div className='isi17SectionBawah'>
          <img src={asset4}/>
          <p
            className="regular kalimatisi173"
            data-aos='fade-right-custom'
          >
          Motif merijam memiliki makna sebagai pengingat masyarakat Dayak <br/>
          terhadap tiga raja tumbuhan yang dipercaya memiliki kekuatan atas <br/>
          seluruh tumbuhan yang ada di bumi. Sementara itu, makna dari motif <br/>
          ruit agar manusia terus berusaha melakukan segala hal untuk <br/>
          kesinambungan dalam menjalani hidup masing-masing individu. 
        </p>
        </div>
      </div>
    </div>
  );
}

export default page17;
