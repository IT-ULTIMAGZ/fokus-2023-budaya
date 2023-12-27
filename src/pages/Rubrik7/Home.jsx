import "./home.css";
import React from 'react'

const Home =()=> {
    return (
        <div className="homeSection">
            <div alt="" className="bgHomeCover">
                <img src="./images/home/budaya_budaya_indonesia.png" alt="" />
                <button className="mulaiButton">Mulai dari sini</button>
            </div>
            <div alt="" className="bgHome" >
                <div className="bgHomeContent">
                    <div className="menuAtas">
                        <img src="./images/home/menu03.png" alt="" className="menu03"/>   
                        <img src="./images/home/menu01.png" alt="" className="menu01"/>
                        <img src="./images/home/menu05.png" alt="" className="menu05"/>
                    </div>
                    <div className="menuBawah"> 
                    <img src="./images/home/menu02.png" alt="" className="menu02"/>
                        <img src="./images/home/menu04.png" alt="" className="menu04"/>
                        <img src="./images/home/menu06.png" alt="" className="menu06"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;