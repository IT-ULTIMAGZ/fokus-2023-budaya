import './muaratakus.css';
import { motion } from "framer-motion";
import { useState } from 'react';

function MuaraTakus(props) {
  const bgPage2 = {
    backgroundImage: 'url(./images/tengok-ragam-real/Page 2/bg pg2.png)'
    // backgroundSize: 'cover'
  };
  const [scroll,setScroll] = useState(props.scroll);
  const show = {
    width:'200vw',
    display: "flex",
  };
  
  const hide = {
    width:'0vw',
    
    transitionEnd: {
      display: "none"
    }
  };
  
  console.log(scroll);

  return(

    <motion.div 
      initial={{ width: "0px",opacity:0 }} 
      animate={{ width: "200vw",opacity:1 }}
      transition={{ duration: 1.5 }}
    className=' flex-row justify-center align-center bgPage2' style={{backgroundImage: 'url(./images/tengok-ragam-real/Page 2/bg pg2.png)'}}>

      <div  style={{height:'80vh'}}className='sidescroll-content-page flex-column justify-around align-center'>
        <img src="./images/tengok-ragam-real/Page 2/aset bg pg2.png" className='gantunganPage2' alt="" />
        <img className='content-img' src='./images/tengok-ragam-real/Page 2/aset 1 pg2.png'></img>
        <br />

        <div style={{textAlign:'center', width:'90vw'}} class='flex-column justify-center align-center'>
          <p style={{fontSize:'2.5vw',fontFamily:'National2CondensedMedium'}}>
            Destinasi sejarah budaya Indonesia kuno yang berada di pinggir sungai <br />
            Kampar, Desa Muara Takus, Riau. Melansir dari kompas.com, nama <br />
            MUARA TAKUS memiliki arti candi tua yang berada di muara sungai.
          </p>

          <p style={{fontSize:'1.21vw',fontFamily:'National2Light'}}>Maka dari itu, <strong><i>Ultimates</i></strong> dapat menemukan suasana <br />
        yang tenang dengan hamparan pepohonan hijau</p>
        </div>
       
      </div>


      <div style={{height:'80vh'}}className='sidescroll-content-page flex-row justify-between'>
        <div style={{width:'45vw',height:'80vh'}} className='flex-column justify-around align-center'>
          <p class='sidescroll-content-hero' style={{fontFamily:"National2CondensedMedium",fontSize:'1.833vw'}}>CANDI <b style={{fontFamily:"National2MediumItalic"}}><i>MUARA</i></b> <b style={{fontWeight:800}}>TAKUS </b> <br />
             diketahui dibangun pada sekitar <br />
            abad ke – 4 hingga abad ke – 11, <br/>
            yakni pada masa kerajaan Sriwijaya.
          </p>

          <img style={{width:'30vw'}} src='./images/tengok-ragam-real/Page 2/aset2 pg2.png'></img>
          <p class='sidescroll-content-desc' style={{fontSize:'1.38vw',fontFamily:'National2Light'}}> <i style={{fontFamily:'National2CondensedMediumItalic'}}>Ultimates</i> dapat melihat bentuk <br />
            stupa sebagai lambang dari <br />
            Buddha Gautama di CANDI <br />
            <b style={{fontWeight:500}}><i>MUARA</i></b> <strong style={{fontWeight:800}}>TAKUS</strong>
          </p>
        </div>

        <div style={{width:'65vw', height:'80vh'}} class='flex-column justify-around align-center'>
          <p class='sidescroll-content-hero' style={{fontSize:'2.01vw',fontFamily:'National2CondensedMedium',marginTop:'2vh'}}>CANDI <b><i style={{fontFamily:'National2CondensedMediumItalic'}}>MUARA</i></b> <b style={{fontFamily:'National2XBold'}}>TAKUS</b> <br />
          sendiri memiliki empat candi, yaitu</p>


          <div style={{width:'80%' }}class='flex-row justify-around align-center'>
            <div className="candi flex-column justify-center align-center">
              <p>01</p>
              <img src='./images/tengok-ragam-real/Page 2/aset3 pg2.png'></img>
            </div>
            <div className="candi flex-column justify-around align-center">
              <p>02</p>
              <img src='./images/tengok-ragam-real/Page 2/aset4 pg2.png'></img>
            </div>
            <div className="candi flex-column justify-around align-center">
              <p>03</p>
              <img src='./images/tengok-ragam-real/Page 2/aset5 pg2.png'></img>
            </div>
            <div className="candi flex-column justify-around align-center">
              <p>04</p>
              <img src='./images/tengok-ragam-real/Page 2/aset6 pg2.png'></img>
            </div>
          </div>

          <p class='sidescroll-content-desc' style={{fontFamily:'National2Light',fontSize:'1.21vw'}} >CANDI <strong>PALANGKA</strong> pun diperkirakan sebagai tempat altar untuk <br />
            menaruhkan sesajen bagi para dewa kepercayaan Buddha. Sebab, <br />
            memang pada mulanya, CANDI <b style={{fontWeight:500}}><i>MUARA</i></b> <strong style={{fontWeight:800}}>TAKUS</strong> dibangun sebagai <br />
            pusat keagamaan Buddha Mahayana.</p>

          <p class='sidescroll-content-desc' style={{fontFamily:'National2Light',fontSize:'1.21vw'}}>Selain pesona arsitektur, CANDI <b style={{fontWeight:500}}><i>MUARA</i></b> <strong style={{fontWeight:800}}>TAKUS</strong> dapat menjadi salah <br />
          satu destinasi bagi wisatawan yang ingin mengetahui tentang <br />
          upacara adat atau keagamaan. Misalnya, untuk perayaan Waisak. <br />
          Wisata budaya CANDI <b style={{fontWeight:500}}><i>MUARA</i></b> <strong style={{fontWeight:800}}>TAKUS</strong> pun memiliki harga tiket yang <br />
          terjangkau, yakni Rp15.000, baik di hari kerja maupun akhir pekan.</p>
        </div>
      </div>
      
    </motion.div>
  )
}

export default MuaraTakus;