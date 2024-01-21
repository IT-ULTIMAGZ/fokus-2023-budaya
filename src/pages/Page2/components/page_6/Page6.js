import React from "react";
import './stylePage6.css';
import Gambar6 from '../../assets/Asset_11.png'

function page6 () {
    return (
        <div className="background6">
            <div className="tulisan6">
                <div className="isi6" data-aos="fade-zoom-in">
                    <p style={{fontSize:'1.56vw'}}>Penggunaan dan pemaknaan masyarakat terhadap kain tradisional sejak dahulu membuat kain menjadi <br />
                        warisan negara yang berharga. Salah satu kain tradisional Indonesia yakni batik bahkan diakui dunia karena <br />
                        nilai dan maknanya yang luhur.<br />
                    </p> 
                    <p style={{fontSize:'1.56vw'}}>The United Nations Educational, Scientific and Cultural Organization (UNESCO) mengakui batik sebagai <br />
                        Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi pada 2 Oktober 2009. Pengakuan ini menjadikan <br />
                        batik sebagai warisan budaya tak benda Indonesia ketiga yang diakui UNESCO setelah keris dan wayang<br />
                    </p>
                    <p style={{fontSize:'1.56vw'}}>Namun, perlu diingat kembali bahwa ada berbagai macam kain dari setiap wilayah di Indonesia selain batik.<br />
                        Oleh karena itu, Kementerian Pendidikan dan Kebudayaan menetapkan 33 kain tradisional dari berbagai<br />
                        daerah sebagai warisan budaya tak benda pada 2017.<br />
                    </p>
                </div>
                <div className="image6">
                <img src={Gambar6}></img>
                </div>    
            </div>       
        </div>
    );
}

export default page6;