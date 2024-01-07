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
            data-scroll
            data-scroll-speed="0.7"
            data-scroll-direction="horizontal"
            src="./images/lima-pelestari/1.png"
            onClick={() => scrollToElement('naomiSusilowati')}
            className="ilustrasiPelestari ilus1 ilus_img"
            alt=""
          />
          <img
            data-scroll
            data-scroll-speed="0.1"
            style={{ transform: 'translate3d(0,15vh,0)' }}
            data-aos-delay="500"
            data-aos-easing="ease-out"
            src="./images/lima-pelestari/4.png"
            onClick={() => scrollToElement('darrylSanggelorang')}
            className="ilustrasiPelestari ilus2 ilus_img"
            alt=""
          />
          <img
            data-scroll
            data-scroll-speed="0.3"
            style={{ transform: 'translate3d(0,27vh,0)' }}
            data-aos-delay="500"
            src="./images/lima-pelestari/3.png"
            onClick={() => scrollToElement('woroMustikoSiwi')}
            className="ilustrasiPelestari ilus3 ilus_img"
            alt=""
          />
          <div className="ilus4Frame" data-scroll-section>
            <img
              src="./images/lima-pelestari/2.png"
              data-scroll
              data-scroll-speed="0.2"
              onClick={() => scrollToElement('lilisSuryani')}
              className="ilustrasiPelestari ilus4"
              alt=""
            />
            <img
              src="./images/lima-pelestari/5.png"
              data-scroll
              data-scroll-speed="0.4"
              style={{ transform: 'translate3d(0,-10vh,0)' }}
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