import AOS from 'aos';

function Page4No6() {
  AOS.init({
    duration : 1000,
    once: false,
  });
  const styles = {
    'backgroundImage':'url("/images/tengok-ragam/bg/Page 6.png")',
    'backgroundSize':'100vw 100vh',
    'backgroundPosition':'center',
    'display':'flex',
    'flexDirection':'row',
    'justifyContent':'center',
    'alignItems':'center',
    'gap':'5vw',
    'width':'100vw',
    'height':'100vh',
  }
  return(
    <div class='page ' style={styles}>
      {/* <div style={{display:'flex',height:'fit-content'}}> */}
        <div style={{width:'calc(942.5273/1920*100vw)',height:'fit-content'}}>
          {/* <img data-aos='fade-up-custom' style={{width:'100%'}}src='/images/tengok-ragam/Text/Page 6/Asset 30.png'></img> */}
          <p data-aos='fade-up-custom' style={{fontFamily:'National2BoldItalic',textAlign:'justify',fontSize:'calc(60/1920*100vw)',color:'#EF4F55',lineHeight:'1'}}>Padahal, budaya nusantara tidak hanya memiliki nilai eksplisit, tetapi juga keunikan dan arti yang mendalam. </p>
          <img data-aos='fade-up-custom' data-aos-delay='700' style={{width:'100%',height:'auto',marginTop:'3vh'}}src='/images/tengok-ragam/Text/Page 6/Asset 31.png'></img>
        </div>
        <img data-aos='fade-up-custom' data-aos-delay='300' style={{width:'calc(390/1920*100vw)',height:'auto'}}src="/images/tengok-ragam/Text/Page 6/budaya pecah telur.png" alt="" />
      {/* </div> */}
    </div>
  )
}

export default Page4No6;