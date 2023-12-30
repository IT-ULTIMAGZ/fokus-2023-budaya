import React from "react";
import './stylePage7.css';
import Gambar7 from '../../assets/Asset_12.png'

function page7 () {
    return (
        <div className="background7">
            <div className="judul7">
                <h1>MELANSIR CNNINDONESIA.COM, <br />
                    33 KAIN TERSEBUT ANTARA LAIN:</h1>
            </div>
            <div className="box7">
                <div className="image7">
                    <img src={Gambar7}></img>
                </div>
                <div className="isi7">
                    <p>Selain kain-kain tersebut, masih banyak kain di Indonesia yang corak dan maknanya mewakili kebudayaan masyarakat. Menjaga eksistensi kain tradisional bukan<br /> 
                        hanya peran pemerintah dan lembaga resmi lainnya, melainkan juga sebagai warga negara untuk menjadikan kain sebagai bagian dari hidup berbudaya
                    </p>
                </div>
            </div>
        </div>
    );
}

export default page7;