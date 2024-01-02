import "./css/part2.css";
import LocomotiveScroll from 'locomotive-scroll';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Part2 = () => {
    // AOS.init();
    const locomotiveScroll = new LocomotiveScroll();
    return (
        <div className="pelestariPart2" >
            <div className="pelestariContainer" id="direction" data-scroll-container>
                <img data-scroll data-scroll-speed="0.7" data-scroll-direction="horizontal"src="./images/lima-pelestari/1.png" onClick={()=>window.location.href='#naomiSusilowati'} className="ilustrasiPelestari ilus1 ilus_img" alt="" />
                <img data-aos="zoom-in-left" data-aos-duration="800" data-aos-delay="500" data-aos-easing="ease-out" src="./images/lima-pelestari/4.png" onClick={()=>window.location.href='#darrylSanggelorang'}className="ilustrasiPelestari ilus2 ilus_img" alt="" />
                <img data-aos = "flip-right" data-aos-easing="ease-in-out" data-aos-delay="500" src="./images/lima-pelestari/3.png" onClick={()=>window.location.href='#woroMustikoSiwi'}className="ilustrasiPelestari ilus3 ilus_img" alt="" />
                <div className="ilus4Frame " data-scroll-section>
                    <img src="./images/lima-pelestari/2.png" data-scroll data-scroll-speed="0.1" data-scroll-direction="horizontal" data-scroll-target="#direction"   onClick={()=>window.location.href='#lilisSuryani'}className="ilustrasiPelestari ilus4"alt="" />
                    <img src="./images/lima-pelestari/5.png" data-scroll-sticky data-scroll-target onClick={()=>window.location.href='#abahEngkus'}className="ilustrasiPelestari ilus5"alt="" />
                </div>
            </div>
            <div className="shadowPelestariContainer"></div>
        </div>
    )
}

export default Part2;