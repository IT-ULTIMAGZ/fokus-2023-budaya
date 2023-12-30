import React from "react";
import './stylePage10.css';
import Gambar10 from '../../assets/Asset_16.png';

function page10 () {
    return (
        <div className="background10">
                <div className="atas10">
                    <h1>Makanya kalau ditanya mengapa Swara Gembira <br />
                        enggak promosi saja kemeja batik, kalau dari kita, <br />
                        kita enggak mau menyoroti kain batik dari coraknya, <br />
                        tapi seni ikat-mengikatnya. Itu yang jadi kunci. Itu <br />
                        yang menurut kami membuat busana Indonesia <br />
                        hidup seperti akarnya</h1> <br />

                    <p> ujar Rifan, dilansir dari liputan6.com</p>
                </div>
                <div className="bawah10">
                    <h3>Berkain menjadi langkah baik bagi masyarakat untuk terus mengingat <br />
                        bahwa kain tradisional Indonesia mampu menjadi bagian dari kehidupan <br />
                        sehari-hari. Bukan hanya coraknya yang filosofis, melainkan juga esensi <br />
                        dari menggunakan kain itu sendiri menunjukkan betapa agungnya <br />
                        budaya Tanah Air</h3>
                    <div className="image10">
                        <img src={Gambar10}></img>
                    </div>
                </div>
                <div className="rumput"></div>
        </div>
    );
}

export default page10;