import "./stylepage14.css";
import keindahan from '../../assets/keindahan.svg';
import kesabaran from '../../assets/kesabaran.svg';
import ketelitian from '../../assets/ketelitian.svg';
import LocomotiveScroll from "locomotive-scroll";
function page14() {
  return (
    <div className="page14"data-scroll-container data-scroll-section>
      <div className="header14">
        <div>
          <span className="regular">Mengutip dari </span>
          <span className="regularItalic">travel.tempo.co,</span>
        </div>
      </div>
      <div className="isi14">
        <div data-scroll data-scroll-speed='0.7'>
          <h1
            className="condensedBold kalimatisi141"
            style={{ fontSize: "72px", width: "70%", letterSpacing: "1px" }}
            
          >
            masyarakat Papua percaya bahwa tenunan noken menggambarkan
          </h1>
          <div>
            <div className="page14Title">
              <img src={ketelitian}/><img src={kesabaran}/>
            </div>
            <div className="page14Title">
              <img src={keindahan}/>
              <h1
              className="condensedBold kalimatisi142"
              style={{
                fontSize: "5vw",
                letterSpacing: "1px",
              }}
              >
              &nbsp; dari pembuatnya.
              </h1>
            </div>
          </div>
        </div>
        <div>
          <p
            className="regular footer14"
            style={{
              fontSize: "28px",
              lineHeight: "1.2",
              height:'fit-content'
            }}
            data-aos='fade-up'
          >
            Tas noken yang memiliki bentuk transparan juga melambangkan <br/> kejujuran
            dan mengajarkan pemiliknya untuk selalu menghargai <br/> milik orang lain.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page14;
