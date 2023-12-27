
function MuaraTakus() {
  return(
    <div className='sidescroll-content flex-row'>
      {/* <img src='./images/tengok-ragam-real/Links/Candi Muara Takus.png'></img> */}
      <img style={{position:'absolute', top:'2%', left:'-5%', zIndex:'0'}}src='./images/tengok-ragam-real/Page 2/aset bg pg2.png'></img>

      <img className='bg-img-sidescroll' src='./images/tengok-ragam-real/Page 2/bg pg2.png'></img>

      <div className='sidescroll-content-page flex-column justify-start align-center'>
        <img className='content-img' src='./images/tengok-ragam-real/Page 2/aset 1 pg2.png'></img>
        <p className='sidescroll-content-desc'>Destinasi sejarah budaya Indonesia kuno yang berada di pinggir sungai
        Kampar, Desa Muara Takus, Riau. Melansir dari <i>kompas.com</i>, nama
        MUARA TAKUS memiliki arti candi tua yang berada di muara sungai.</p>
      </div>
      
    </div>
  )
}

export default MuaraTakus;