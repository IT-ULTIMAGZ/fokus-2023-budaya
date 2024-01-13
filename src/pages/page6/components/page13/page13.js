import "./stylepage13.css";
import tas from "../../assets/gambar2.png";
import nokenPapua from '../../assets/nokenPapua.svg';
import LocomotiveScroll from "locomotive-scroll";
import AOS from "aos";
function page13(){
    AOS.init({
        duration: 1000,
        once: false,
      });
    const locomotiveScroll = new LocomotiveScroll();
    return(
        <div className="page13">
            <div className='page13Right' data-scroll data-scroll-speed='0.7'>
                <img className="tas13" src={tas}  alt="" />
                <img src={nokenPapua}/>
            </div>
            <div className="isi13" data-scroll data-scroll-speed='0.5'>
                <h1 className="condensedBold kalimatisi13" style={{fontSize:'6.83vw', width:'84%', lineHeight:'1.2'}}>Noken merupakan tas tradisional <br/> masyarakat 
                Papua yang biasanya <br/>  digunakan untuk
                membawa hasil pertanian <br/>
                 dan dagangan ke pasar.</h1>
                <p className="regular footer13" style={{fontSize:'20px', marginTop:'6%', width:'49%'}}>Berbeda dari penggunaan tas pada umumnya, noken biasanya dibawa dengan menggunakan kepala. Lalu, 
                    noken dapat digunakan sebagai penutup kepala dan untuk mengangkut berbagai barang.</p>
            </div>
        </div>
    )
}

export default page13;