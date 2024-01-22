import './css/part6.css';
import AOS from 'aos';
import LocomotiveScroll from 'locomotive-scroll';

const Part6 = () => {
    AOS.init({
        duration : 1000,
        once: false,
      });
    const locomotiveScroll = new LocomotiveScroll();

    return (
        <div className="part6Section" id="lilisSuryani">
            <div data-scroll data-scroll-speed='0.7'>
                <img src="./images/lima-pelestari/2.png" alt="" />
            </div>
            <div data-aos='fade-left-custom' className='part6SectionKanan' >
                <p>Perjalanan batiknya dimulai saat ia bekerja di <b> Batik Tul Mitaka</b> <br /> milik Sani Rachman sebagai buruh mencanting pada 1990.</p>
            </div>
        </div>
    )
}

export default Part6;