import React from "react";
import './stylePage3.css';
import Gambar3 from '../../assets/Asset_6.png'
function page3 () {
    return (
        <div className="background3">
            <div className="content3">
                <div className="tulisan">
                    <div className="judul"> 
                    <h1>MENELISIK KAIN <br />
                        DARI BERBAGAI PULAU <br />
                        DI INDONESIA</h1></div>
                    <div className="isi"> 
                    <p> Masing-masing daerah di Indonesia memiliki corak dan jenis kain mereka 
                        tersendiri. Keberagaman kain ini dipengaruhi oleh sejarah daerah setempat. 
                        Misalnya,
                         kain batik yang berkembang seiring dengan perkembangan Kerajaan 
                        Majapahit dan Mataram di daerah Jawa.</p>

                    <br></br>
                        <p>Batik adalah adat istiadat turun menurun, sehingga corak batik dapat 
                        menunjukkan asal usul atau status orang yang mengenakan. Oleh karena itu, 
                        terdapat beberapa corak batik yang hanya bisa dikenakan oleh keluarga 
                        bangsawan, seperti batik parang keluarga Keraton Yogyakarta</p>
                    </div>
                </div>
                <div className="image3">
                    <img src={Gambar3}></img>
                </div>
            </div>
        </div>
    );
}

export default page3;