import "./css/part4.css";
import LocomotiveScroll from 'locomotive-scroll';
import AOS from 'aos';

const Part4 = () => {
    AOS.init({
        duration : 1000,
        once: false,
      });
    const locomotiveScroll = new LocomotiveScroll();
    return (
        <div className="part4Section" id="naomiSusilowati">
            <div className="textAtas">
                <p data-aos='fade-left-custom'>Motif <b>Batik Lasem</b> merupakan perpaduan dari budaya <b> Tionghoa dan Jawa</b>, <br />
                dilansir dari media indonesia.com. Batik ini juga dikenal sebagai <br />
                <b>Batik Tiga Negeri </b>  karena melewati tiga kali proses pewarnaan. </p>

                <p data-aos='fade-right-custom'>
                    <br />
                Mengutip dari finansialku.com, <b>Batik Lasem</b> adalah kebudayaan<br /> 
                turun-temurun yang sudah terkenal, bahkan masuk ke lingkup internasional. <br />
                Namun, pada masanya, pesona batik ini sempat padam. <b>NAOMI</b> merupakan <br />
                sosok yang mengembalikan daya tarik kain batik perpaduan dua budaya ini.
                </p>
                </div>
            <div>
                <img data-scroll
              data-scroll-speed="0.6"
              style={{ transform: 'translate3d(0,0vh,0)' }} src="./images/lima-pelestari/1.png" alt="" />
            </div>
        </div>
    );
}

export default Part4;