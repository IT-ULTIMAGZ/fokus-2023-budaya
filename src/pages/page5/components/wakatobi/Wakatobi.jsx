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
                <img src="./images/tengok-ragam-real/Page 6/aset1 pg6.png" style={{marginRight:'-1vw'}} alt="" />
                <div className="wakatobiTitle" style={{display:'flex',flexDirection:'column',position:'relative',zIndex:'1',width:'33.86vw'}}>
                    <div style={{display:'flex'}} >
                        <p style={{fontFamily:'National2CondensedBlackItalic'}}>
                            TAMAN
                        </p> 

                        <p style={{fontFamily:'National2CompressedRegularItalic'}}>
                            &nbsp;NASIONAL
                        </p>
                    </div>
                    <p style={{fontSize:'calc((122 / 1920) * 100vw)',fontFamily:'National2Black'}}> 
                         WAKATOBI
                    </p>
                    
                </div>
                <img src="./images/tengok-ragam-real/Page 6/aset2 pg6.png" style={{marginLeft:'-4vw',position:'relative',zIndex:'0'}}alt="" />
            </div>

            <div className='wakatobiSectionBawah'>
                <p style={{fontFamily:'National2CompressedMedium',fontSize:'2.5vw',lineHeight:'1.2',width:'30.33vw'}}>
                    <span>DESA </span><b style={{fontFamily:'National2Black'}} >WAKATOBI</b> adalah sebuah <br />
                    pemukiman yang terletak di Kepulauan <br />
                    Wakatobi, Sulawesi Tenggara, Indonesia. <br />
                    Penghuni asli kepulauan <b>WAKATOBI</b><br />
                    ini adalah <b>Suku Bajo</b> yang percaya <br /> 
                    bahwa dirinya merupakan keturunan <br /> 
                    langsung dari laut.
                </p>
                <div style={{width:'42.8453vw',gap:'5vh'}}>
                    <p style={{fontFamily:'National2Regular'}}>
                        Dengan datang ke <span>DESA</span> <b>WAKATOBI</b>,  <i>Ultimates</i> dapat mengenal dekat <br /> 
                        Suku Bajo. Suku Bajo dikenal dalam segala bentuk aktivitas <br />
                        bahari, sehingga  <i>Ultimates</i> dapat ikut merasakan petualangan suku <br />
                        Bajo di laut biru, <i style={{fontFamily:"National2BlackItalic"}}>seperti menggunakan perahu tradisional Bajo <br />
                        dan mengamati lumba-lumba di sekitar. </i> 
                    </p>
                    <p style={{fontFamily:'National2Regular',lineHeight:'1.2'}}>
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