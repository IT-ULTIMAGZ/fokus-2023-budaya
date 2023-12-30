import '../rubrik5.css'
function MuaraTakus() {
  return(
    <div data-aos='fade-in' data-aos-duration= '1000'id='muaratakus' className='sidescroll-content flex-row justify-center align-center'>
      {/* <img src='./images/tengok-ragam-real/Links/Candi Muara Takus.png'></img> */}
      <img style={{position:'absolute', zIndex:'0'}}src='./images/tengok-ragam-real/Page 2/aset bg pg2.png'></img>

      <img className='bg-img-sidescroll' src='./images/tengok-ragam-real/Page 2/bg pg2.png'></img>
      <div  style={{height:'80vh'}}className='sidescroll-content-page flex-column justify-around align-center'>
        <img className='content-img' src='./images/tengok-ragam-real/Page 2/aset 1 pg2.png'></img>

        <div style={{textAlign:'center', width:'90vw'}} class='flex-column justify-center align-center'>
          <p className='sidescroll-content-desc'>Destinasi sejarah budaya Indonesia kuno yang berada di pinggir sungai
          Kampar, Desa Muara Takus, Riau. Melansir dari <i>kompas.com</i>, nama
          <b style={{fontWeight:500}}> <i>MUARA</i></b> <strong style={{fontWeight:800}}>TAKUS</strong> memiliki arti candi tua yang berada di muara sungai.</p>

          <p style={{maxWidth:'500px'}}>Maka dari itu, <strong><i>Ultimates</i></strong> dapat menemukan suasana
  yang tenang dengan hamparan pepohonan hijau</p>
        </div>
       
      </div>


      <div style={{height:'80vh'}}className='sidescroll-content-page flex-row justify-between'>
        <div style={{width:'45vw',height:'80vh'}} className='flex-column justify-around align-center'>
          <p class='sidescroll-content-hero'>CANDI <b style={{fontWeight:500}}><i>MUARA</i></b> <b style={{fontWeight:800}}>TAKUS</b>
            diketahui dibangun pada sekitar
            abad ke – 4 hingga abad ke – 11, <br></br>
            yakni pada masa kerajaan Sriwijaya.
          </p>

          <img src='./images/tengok-ragam-real/Page 2/aset2 pg2.png'></img>
          <p class='sidescroll-content-desc'> Ultimates dapat melihat bentuk
            stupa sebagai lambang dari
            Buddha Gautama di CANDI
            <b style={{fontWeight:500}}><i>MUARA</i></b> <strong style={{fontWeight:800}}>TAKUS</strong>
          </p>
        </div>

        <div style={{width:'65vw', height:'80vh'}} class='flex-column justify-around align-center'>
          <p class='sidescroll-content-hero'>CANDI <b style={{fontWeight:500}}><i>MUARA</i></b> <em style={{fontWeight:800}}>TAKUS</em>
          sendiri memiliki empat candi, yaitu</p>


          <div style={{width:'80%',marginTop:'20px' }}class='flex-row justify-around align-center'>
            <div className="candi flex-column justify-around align-center">
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

          <p class='sidescroll-content-desc'>CANDI <strong>PALANGKA</strong> pun diperkirakan sebagai tempat altar untuk
            menaruhkan sesajen bagi para dewa kepercayaan Buddha. Sebab,
            memang pada mulanya, CANDI <b style={{fontWeight:500}}><i>MUARA</i></b> <strong style={{fontWeight:800}}>TAKUS</strong> dibangun sebagai
            pusat keagamaan Buddha Mahayana.</p>

          <p class='sidescroll-content-desc'>Selain pesona arsitektur, CANDI <b style={{fontWeight:500}}><i>MUARA</i></b> <strong style={{fontWeight:800}}>TAKUS</strong> dapat menjadi salah
          satu destinasi bagi wisatawan yang ingin mengetahui tentang
          upacara adat atau keagamaan. Misalnya, untuk perayaan Waisak.
          Wisata budaya CANDI <b style={{fontWeight:500}}><i>MUARA</i></b> <strong style={{fontWeight:800}}>TAKUS</strong> pun memiliki harga tiket yang
          terjangkau, yakni Rp15.000, baik di hari kerja maupun akhir pekan.</p>
        </div>
      </div>
      
    </div>
  )
}

export default MuaraTakus;