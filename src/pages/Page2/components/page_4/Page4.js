import React from "react";
import './stylePage4.css';
import Gambar4 from '../../assets/Asset_9.png'

function page4 () {
    return (
        <div className="background4">
            <div className="content4">
                <div className="image4">
                    <img src={Gambar4}></img>
                </div>
                <div className="tulisan4"> 
                    <h3>Kain tradisional populer lainnya juga memiliki sejarah mereka 
                        masing-masing. Misalnya, kain songket asal Sumatera Selatan 
                        yang warna utamanya cenderung merah dan emas. Melansir 
                        batam.tribunnews.com, hal ini disebabkan perkembangan tradisi 
                        Cina yang melambangkan warna merah sebagai keberanian dan 
                        emas sebagai kekayaan, kejayaan, dan kemakmuran.</h3> <br></br>
                    <h3>Selain sejarah dan coraknya, hal yang menjadikan kain Indonesia 
                        beragam adalah bahan dasarnya. Beberapa kain tradisional 
                        terbuat dari bahan-bahan di alam seperti kayu atau daun tertentu.</h3> <br></br>
                    <p>Contohnya, kain ulap doyo Kalimantan Timur yang terbuat dari daun doyo yang dikeringkan dan dijadikan 
                        serat halus. Terdapat pula tenun sekomandi Sulawesi Barat yang terbuat dari tumbukan kulit kayu. 
                        Masyarakat suku Sobey, Papua, juga memiliki tenun terfo yang terbuat dari anyaman daun nipah muda</p>
                </div>
            </div>
        </div>
    );
}

export default page4;