import "./css/part2.css";
import LocomotiveScroll from 'locomotive-scroll';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Part2 = () => {
    // AOS.init();
    const locomotiveScroll = new LocomotiveScroll();
    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
    
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth',
          });
        }
      };
    return (
        <div className="pelestariPart2" >
            <div className="pelestariContainer" id="direction" data-scroll-container>
            <img
            data-aos='fade-up-custom'
            src="./images/lima-pelestari/1.png"
            onClick={() => scrollToElement('naomiSusilowati')}
            className="ilustrasiPelestari ilus1 ilus_img"
            alt=""
          />
          <img
            data-aos='fade-down'
            data-aos-delay='300'
            src="./images/lima-pelestari/4.png"
            onClick={() => scrollToElement('darrylSanggelorang')}
            className="ilustrasiPelestari ilus2 ilus_img"
            alt=""
          />
          <img
          data-aos='fade-left-custom'
          data-aos-delay='600'
            src="./images/lima-pelestari/3.png"
            onClick={() => scrollToElement('woroMustikoSiwi')}
            className="ilustrasiPelestari ilus3 ilus_img"
            alt=""
          />
          <div className="ilus4Frame" data-scroll-section>
            <img
              data-aos='zoom-in-custom'
              data-aos-delay='900'
              src="./images/lima-pelestari/2.png"
              onClick={() => scrollToElement('lilisSuryani')}
              className="ilustrasiPelestari ilus4"
              alt=""
            />
            <img
              data-aos='fade-up-pop'
              data-aos-delay='1200'
              src="./images/lima-pelestari/5.png"
              onClick={() => scrollToElement('abahEngkus')}
              className="ilustrasiPelestari ilus5"
              alt=""
            />
            </div>
            </div>
            <div className="shadowPelestariContainer"></div>
        </div>
    )
}

export default Part2;