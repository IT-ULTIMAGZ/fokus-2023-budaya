import AOS from 'aos';

function Page4No7() {
  AOS.init({
    duration : 1000,
    once: false,
  });
  const styles = {
    'backgroundImage': 'url("./images/tengok-ragam/bg/Page 7.png")',
    'backgroundColor':'#ffaf00',
    'backgroundSize': '100vw 100vh',
    'backgroundPosition': 'center',
    'width': '100vw',
    'height': '100vh',
    'backgroundRepeat': 'no-repeat'
  }

  return(
    <div class='page flex-column align-center justify-center' style={styles}>
      <img data-aos='zoom-in-custom' src='./images/tengok-ragam/ilustrasi/halobali.png' style={{width:'80vw',height:'52.5vh'}} class='halobali'></img>
      <div className=" flex-row justify-start align-start" style={{width:'80vw', height:'47.5vh',display:'flex',justifyContent:'center',gap:'3vw'}}>
        <p data-aos='fade-up-pop' style={{textAlign:'justify',padding:'3vw 0vw 5vw 10vw',width:'50%', fontFamily:'National2Medium',fontSize:'calc(24/1920*100vw)',color:'#0A6B49'}}>    
          Salah satu contohnya adalah toko fesyen Halo 
          Bali yang menjual kreasi batik modern di Korea
          Selatan. Dimiliki oleh warga negara Indonesia, toko
          tersebut menjual berbagai produk bermotif batik
          seperti tote bag, sarung bantal, celana, baju, kaus 
          kaki, dan dekorasi rumah. Hasil dari inovasi dan
          kreasi tersebut membawa batik dikenal oleh 
          masyarakat luas, khususnya di Korea Selatan.
          Walau kesannya melemah, budaya nusantara
        </p>
        <p  data-aos='fade-up-pop' style={{textAlign:'justify',width:'50%',padding:'3vw 10vw 5vw 0vw', fontFamily:'National2Medium',fontSize:'calc(24/1920*100vw)',color:'#0A6B49'}}>
        sebenarnya mampu bersanding oleh teknologi 
        dan informasi di era globalisasi berkat inovasi dan kreasi masyarakat, terutama generasi muda. Hal ini membuktikan bahwa budaya Indonesia adalah budaya yang adaptif bukan kuno. Selain itu, ini juga menunjukkan bagaimana perkembangan zaman tidak serta merta memberikan dampak buruk bagi warisan   
            budaya nusantara.
        </p>
      </div>
    </div>
  )
}

export default Page4No7;