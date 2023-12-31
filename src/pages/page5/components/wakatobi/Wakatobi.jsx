import './wakatobi.css';
import { motion } from "framer-motion";

const Wakatobi = () => {
    return (
        <motion.div
            className="wakatobiSection"
            initial={{ width: "0px",opacity:0 }} 
            animate={{ width: "100vw",opacity:1 }}
            transition={{ duration: 1.5 }}
        >
            <div className='wakatobiSectionAtas'>
                <img src="./images/tengok-ragam-real/Page 6/aset1 pg6.png" alt="" />
                <p style={{boxShadow:''}}><i>TAMAN NASIONAL</i> <br />WAKATOBI</p>
                <img src="./images/tengok-ragam-real/Page 6/aset2 pg6.png" alt="" />
            </div>

            <div className='wakatobiSectionBawah'>
                <p style={{fontFamily:'National2Rgular',fontSize:'2.01vw'}}>
                    <span>DESA </span><b>WAKATOBI</b> adalah sebuah <br />
                    pemukiman yang terletak di Kepulauan <br />
                    Wakatobi, Sulawesi Tenggara, Indonesia. <br />
                    Penghuni asli kepulauan <b>WAKATOBI</b><br />
                    ini adalah <b>Suku Bajo</b> yang percaya <br /> 
                    bahwa dirinya merupakan keturunan <br /> 
                    langsung dari laut.
                </p>
                <div>
                    <p style={{letterSpacing:'0.5px'}}>
                        Dengan datang ke DESA WAKATOBI,  <i>Ultimates</i> dapat mengenal dekat <br /> 
                        Suku Bajo. Suku Bajo dikenal dalam segala bentuk aktivitas <br />
                        bahari, sehingga  <i>Ultimates</i> dapat ikut merasakan petualangan suku <br />
                        Bajo di laut biru, seperti menggunakan perahu tradisional Bajo <br />
                        dan mengamati lumba-lumba di sekitar. 
                    </p>
                    <p style={{letterSpacing:'0.5px'}}>
                    Selain itu, suku ini juga terkenal akan budaya mereka yang <br />
                     mencakup seni musik, tarian, dan cerita rakyat tentang <br />
                      kehidupan laut dan petualangan mereka. Salah satunya adalah <br />
                    kemampuan mereka untuk membaca bintang-bintang di langit.
                    </p>
                </div>
                
            </div>
        </motion.div>
    )
}

export default Wakatobi;