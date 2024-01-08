import './cendrawasih.css';
import { motion } from "framer-motion";
const cendrawasih = () => {
    return (
        <motion.div 
            initial={{ width: "0px",opacity:0 }} 
            animate={{ width: "200vw",opacity:1 }}
            transition={{ duration: 1.5 }}
            className="cendrawasihSection">
            <div className='cendrawasihSectionKiri'>
                <img src="./images/tengok-ragam-real/Page 5/aset1 pg5.png" alt="" />
                <br />
                <div>
                    <p style={{fontSize:'2vw',textAlign:'center'}}> <i><b>TAMAN</b> NASIONAL</i>  TELUK <b>CENDERAWASIH</b> merupakan salah satu destinasi di <br />
                     Papua yang memerlihatkan keindahan kehidupan pesisir laut. <i><b>TAMAN</b>  NASIONAL</i> <br />
                    <span  style={{fontFamily:'National2CompressedMedium'}}>TELUK</span>  <b>CENDERAWASIH</b>  memiliki pemandangan hamparan laut biru, <br />
                      warna-warni terumbu karang, dan fauna bawah laut yang mengagumkan. </p>
                    
                    <p style={{fontSize:'1.01vw',fontFamily:'National2Light'}}>
                    Salah satu fauna bawah laut yang dapat <i>Ultimates</i>  ajak interaksi adalah hiu paus. Di TAMAN <br />
                     NASIONAL <span>TELUK</span>  <b>CENDERAWASIH</b> , <i style={{fontFamily:'National2BoldItalic'}}>hiu paus</i>  sering muncul ke permukaan rumah terapung <br />
                      tempat menangkap ikan dan berinteraksi dengan nelayan. <i style={{fontFamily:'National2BoldItalic'}}>Hiu paus</i> tidak seperti hiu <br />
                       ganas, ia merupakan ikan besar yang ramah, sehingga <i>Ultimates</i>  tidak perlu takut.    
                    </p>
                </div>
            </div>

            <div className='cendrawasihSectionKanan'>
                <p>Selain bermain dengan hiu paus,  <i>Ultimates</i> dapat mengunjungi gua yang ada di Pulau Mioswaar. Gua tersebut <br />
                 menyimpan  kerangka leluhur Suku Wandau. Kerangka ini sangat dijaga oleh masyarakat. Sebab, Suku Wandau <br />
                  dipercaya sebagai manusia pertama yang datang ke pulau ini.  </p>
                <p>
                    Maka dari itu, Taman Nasional Teluk Cenderawasih ini sudah bekerja sama dengan pemerintah dalam menjaga <br />
                    kelestarian budayanya. Salah satu bentuknya adalah dengan tradisi sasi.  
                </p>
                <p>
                Dilansir dari telukcenderawasihnationalpark.com, sasi adalah tradisi pembatasan suatu area yang tidak boleh <br />
                diakses dan diambil sumber daya alamnya (SDA) oleh orang-orang pada jangka waktu tertentu. Setelah periode <br />
                 jangka waktu yang ditentukan selesai, area tersebut dapat diakses dan SDA dapat diambil untuk kebutuhan <br />
                  masyarakat sekitar. Melalui tradisi ini, keadaan di alamnya tetap bersih sehingga wisatawan dapat merasakan <br />
                   pengalaman terbaik dalam menyelam untuk melihat keindahan Taman Nasional Teluk Cenderawasih. 
                </p>
               
               <img src="./images/tengok-ragam-real/Page 5/aset2 pg5.png" alt="" />
               
            </div>
        </motion.div>
    )
}

export default cendrawasih;