import React from "react";
import "./stylepage3.css";
import daun from "../../assets/gambar6.png";
import kaki from "../../assets/gambar1.png";
import tas from "../../assets/gambar2.png";
import kain from "../../assets/gambar3.png";
import batik from "../../assets/gambar4_1.png";
import text01 from '../../assets/01.svg';
import text02 from '../../assets/02.svg';
import text03 from '../../assets/03.svg';
import text04 from '../../assets/04.svg';
import text05 from '../../assets/05.svg';
import udengBali from "../../assets/udengBali.svg";
import tikarPandan from "../../assets/tikarPandan.svg";
import aragaSulawesiPutih from "../../assets/aragaSulawesiPutih.svg";
import nokenPapua from "../../assets/nokenPapua.svg";
import tenunIkat from "../../assets/tenunIkat.svg";
import LocomotiveScroll from "locomotive-scroll";

const page3 =()=> {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="boxxes" data-scroll-container>
      <div className="undeng panjang" data-scroll-section>
        <div className="judul3">
          <img src={text01} className='textNumber'  alt=''/>
        </div>
        <div className="gambarudeng gambarr" data-scroll data-scroll-speed='0.4'>
          <img src={daun} alt="UDENG" ></img>
        </div>
        <div className="desc">
          <img src={udengBali} className="textTitle"/>
        </div>
      </div>
      <div className="tikar panjang">
        <div className="judul3" >
          <img src={text02} className='textNumber' alt=''/>
        </div>
        <div className="gambarr gambartikar">
          <img src={batik} alt="Tikar" data-scroll data-scroll-speed='0.2'></img>
        </div>
        <div className="desc">
        <img src={tikarPandan} style={{width:'15vw'}} className="textTitle"/>
        </div>
      </div>
      <div className="araga panjang">
        <div className="judul3">
          <img src={text03} className='textNumber' alt=''/>
        </div>
        <div className="gambarr gambararaga">
          <img src={kaki} style={{width:'14vw'}} data-scroll data-scroll-speed='0.4' alt="ARAGA"></img>
        </div>
        <div className="desc">
        <img src={aragaSulawesiPutih} className="textTitle"/>
        </div>
      </div>
      <div className="noken panjang">
        <div className="judul3">
          <img src={text04} className='textNumber' alt=''/>
        </div>
        <div className="gambarr gambarnoken">
          <img src={tas} data-scroll data-scroll-speed='0.3' alt="NOKEN"></img>
        </div>
        <div className="desc">
          <img src={nokenPapua} className="textTitle"/>
        </div>
      </div>
      <div className="tenun panjang">
        <div className="judul3">
          <img src={text05} className='textNumber' alt=''/>
        </div>
        <div className="gambarr gambartenun">
          <img src={kain} data-scroll data-scroll-speed='0.4' alt="tenun"></img>
        </div>
        <div className="desc">
          <img src={tenunIkat} className="textTitle"/>
        </div>
      </div>
    </div>
  );
}

export default page3;
