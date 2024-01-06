import React from "react";
import './stylePage10.css';
import Gambar10 from '../../assets/Asset_16.png';

function page10 () {
    return (
        <div className="background10">
                <div className="atas10">
                    <p style={{fontFamily:'National2Bold',fontSize:'4vw',lineHeight:'1.1',marginBottom:'0px',marginTop:'4vh'}}>Makanya kalau ditanya mengapa Swara Gembira <br />
                        enggak promosi saja kemeja batik, kalau dari kita, <br />
                        kita enggak mau menyoroti kain batik dari coraknya, <br />
                        tapi seni ikat-mengikatnya. Itu yang jadi kunci. Itu <br />
                        yang menurut kami membuat busana Indonesia <br />
                        hidup seperti akarnya</p>

                    <p style={{fontFamily:'National2Regular',fontSize:'2vw',lineHeight:'1.1',marginBottom:'0px',marginTop:'2vh'}}> ujar Rifan, dilansir dari <i style={{fontFamily:'National2LightItalic',fontSize:'2vw',lineHeight:'1.1',marginBottom:'0px'}}>liputan6.com</i> </p>
                </div>
                <div className="bawah10">
                    <p style={{fontFamily:'National2Regular',fontSize:'2.43vw',lineHeight:'1.1',marginLeft:'4vw',marginTop:'4vw'}}>Berkain menjadi langkah baik bagi masyarakat untuk terus mengingat <br />
                        bahwa kain tradisional Indonesia mampu menjadi bagian dari kehidupan <br />
                        sehari-hari. Bukan hanya coraknya yang filosofis, melainkan juga esensi <br />
                        dari menggunakan kain itu sendiri menunjukkan betapa agungnya <br />
                        budaya Tanah Air</p>

                    <img className="image10"src={Gambar10}></img>
                    
                </div>
                <div className="rumput"></div>
        </div>
    );
}

export default page10;