import './css/part8.css';
import AOS from 'aos';
import LocomotiveScroll from 'locomotive-scroll';

const Part8 = () => {
    AOS.init({
        duration : 1000,
        once: false,
      });
    const locomotiveScroll = new LocomotiveScroll();
    return (
        <div className="part8Section" id="woroMustikoSiwi">
            <div>
                <img data-scroll data-scroll-speed='0.5' data-scroll-direction='horizontal' src="./images/lima-pelestari/3.png" alt="" />
            </div>
            <div className='part8SectionKanan' >
                <p data-aos='fade-up-custom'>Selain di bidang pedalangan, <span>WORO </span>  juga mempelajari <b>macapat</b>. <b>Macapat</b> merupakan bentuk <br />
                puisi Jawa tradisional yang biasanya ada dalam pertunjukan wayang, dilansir dari <i>detik.com.</i></p>
                <br />

                <p data-aos='fade-up-custom' data-aos-delay='300'>Usaha <span>WORO</span> dalam mempelajari dan melestarikan seni tradisional Jawa pun berhasil mencuri <br />
                    perhatian pemerintah. Remaja asal Semarang ini mendapatkan penghargaan <br />
                    <b>anugerah kebudayaan</b>  untuk kategori Anak dan Remaja dari Kementerian Pendidikan dan <br />
                    Kebudayaan Republik Indonesia pada 2017.  </p>
            </div>
        </div>
    )
}

export default Part8;