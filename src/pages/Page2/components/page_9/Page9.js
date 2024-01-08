import React from "react";
import './stylePage9.css';
import Gambar9 from '../../assets/Asset_15.png'

function page9 () {
    return (
        <div className="background9">
            <div className="content9">
                <div className="image9" data-scroll-container>
                    <img src={Gambar9}
                    data-scroll
                    data-scroll-speed="0.4"
                    data-scroll-direction="horizontal"></img>
                </div>
                <div className="tulisan9"
                data-aos="fade-left"> 
                    <p style={{fontFamily:'National2Medium',fontSize:'1.68vw',lineHeight:'2vw'}}>Kain tradisional sering digunakan masyarakat saat acara-acara <br />
                        formal, seperti pesta pernikahan, kelulusan, dan sebagainya. <br />
                        Namun, sudah sepantasnya masyarakat, baik muda maupun tua <br />
                        untuk mulai mengenakan kain tradisional dalam kehidupan <br />
                        sehari-hari. Akhir-akhir ini berkain menjadi tren di kalangan <br />
                        generasi muda. Tren <b>#berkainbersama</b>  mulai ramai pada 2021. <br />
                        Generasi muda menunjukkan gaya busana mereka dengan <br />
                        mengombinasikan kain batik beserta pakaian sehari-hari.</p>
                    <p style={{fontFamily:'National2Regular',fontSize:'1.38vw',letterSpacing:'1px',lineHeight:'2vw'}}>Tren berkain semakin digaungkan oleh generasi muda, khususnya oleh Swara Gembira. <br />
                       Swara Gembira merupakan komunitas generasi muda Indonesia untuk berkarya dengan <br />
                       seni, tradisi, dan budaya Indonesia. Direktur Utama Swara Gembira Rifan Rahman <br />
                       menjelaskan bahwa selain menunjukkan corak, berkain memiliki seni ikat-mengikat khas <br />
                       dari nenek moyang. Maka dari itu, seseorang tidak perlu memakai batik bercorak penuh <br />
                       saat memulai gaya hidup berkain.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default page9;