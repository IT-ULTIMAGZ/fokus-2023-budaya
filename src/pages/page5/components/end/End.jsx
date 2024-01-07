import './end.css';
import { motion } from "framer-motion";

const End = () => {
    return (
        <motion.div
            initial={{ width: "0px",opacity:0 }} 
            animate={{ width: "100vw",opacity:1 }}
            transition={{ duration: 1.5 }}
         className="endSection">
            <div className='endSectionAtas'>
                
            </div>

            <div className='endSectionBawah'>
                <p style={{fontFamily:'National2Rgular',fontSize:'2.01vw'}}>
                    Kelima tempat di atas menjadi contoh pariwisata budaya yang tersebar
                </p>
                <img src="./images/tengok-ragam-real/Page 7/aset1 pg7.png" alt="" />
                <p>
                    Setiap destinasi menawarkan budayanya sebagai <img style={{height:'2.7vh',width:'auto'}} src="./images/tengok-ragam-real/Page 7/aset2 pg7.png" alt="" />
                </p>
                <br />
                <p style={{fontFamily:'National2Light',fontSize:'1.38vw'}}>Kira-kira, Ultimates ingin berkunjung ke mana dulu? </p>

                
            </div>
        </motion.div>
    )
}

export default End;