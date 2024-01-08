import './tomok.css';
import { motion } from "framer-motion";
const Tomok = () => {
    return (
        <motion.div 
            initial={{ width: "0px",opacity:0 }} 
            animate={{ width: "200vw",opacity:1 }}
            transition={{ duration: 1.5 }}
        className="tomokSection">
            <div className='tomokSectionKiri'>
                <div>
                    <img src="./images/tengok-ragam-real/Page 4/aset1 pg4.png" alt="" />
                    <br />
                    <img src="./images/tengok-ragam-real/Page 4/aset2 pg4.png" alt="" />
                </div>
                <div>
                    <p style={{fontSize:'1.68vw',fontFamily:'National2Medium'}}>
                        <span>DESA</span> <b>TOMOK</b> terletak di pulau Samosir, <br />
                        Danau Toba, Sumatera Utara. Masyarakat <br />
                        yang tinggal di sana adalah <b>Suku Batak  <br />
                        Toba </b>. Melansir <i style={{fontFamily:'National2CompressedXLightItalic'}}>pariwisataindonesia.id</i> , wisatawan <br /> 
                        yang baru datang ke <span>DESA</span> <b>TOMOK</b> akan <br />
                        disambut oleh <b>tari tor-tor</b>  yang dilakukan <br />
                        oleh masyarakat setempat.
                  </p>
                  <br /><br /><br />
                  <p style={{fontSize:'1.38vw',fontFamily:'National2Light'}}>
                        Selain itu, wisatawan yang berkunjung juga dapat <br /> 
                        masuk ke kawasan kampung Batak untuk melihat <br />
                        rumah adat Batak yaitu <i style={{fontFamily:'National2BoldItalic'}}>rumah bolon</i> . Ada juga <br />
                        kompleks pemakaman kuno raja-raja Batak.  </p>
                
                </div>
            </div>

            <div className='tomokSectionKanan'>
                <div>
                    <p style={{fontSize:'1.38vw'}}>
                        Lalu, <i>Ultimates</i> juga <br />
                        dapat melihat
                    </p>
                    <img src="./images/tengok-ragam-real/Page 4/aset3 pg4.png" alt="" />
                    <br /><br />
                    <p style={{fontSize:'2.01vw',lineHeight:'1.4'}}>
                        Melansir dari detik.com, konon PATUNG <br />
                        SIGALEGALE ini merupakan patung <br />
                        yang dibuat mirip sekali dengan <br />
                        Manggale, seorang pangeran yang <br />
                        tewas di medan perang. 
                    </p>
                </div>
                <div>
                    <p style={{fontSize:'1.83vw',fontFamily:'National2Regular'}}>Biasanya, <br />
                        PATUNG SIGALE-GALE <br /> 
                        dihadirkan pada saat
                        </p>

                    <img src="./images/tengok-ragam-real/Page 4/aset4 pg4.png" alt="" />
                    <img src="./images/tengok-ragam-real/Page 4/aset5 pg4.png" alt="" />
                    <br /><br />
                    <p style={{fontSize:'1.68vw',fontFamily:'National2CondensedLight'}}>
                    Lalu, patung ini juga dimainkan pada <br />
                    pementasan SIGALEGALE yang  <i>Ultimates</i>  bisa <br />
                    saksikan jika datang ke DESA TOMOK ini. 
                    </p>
                </div>
               
            </div>
        </motion.div>
    )
}

export default Tomok;