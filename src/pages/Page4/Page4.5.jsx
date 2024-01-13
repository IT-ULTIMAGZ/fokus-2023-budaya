import AOS from 'aos';

function Page4No5() {
  AOS.init({
    duration : 1000,
    once: false,
  });
  const styles = {
    'backgroundImage': 'url("/images/tengok-ragam/bg/Page 5.png")',
    'fontSize':'0',
    'margin':'0',
    'padding':'0',
    'backgroundSize':'100vw 100vh',
    'width':'100vw',
    'height':'100vh',
  }

  const images = {
    'width':'600px'
  }

  return(
    <div class='page flex-column justify-center align-center' style={styles}>
      <img data-aos='fade-right-custom' data-aos-duration='1500' src='/images/tengok-ragam/Text/Page 5/Asset 26.png' style={{height:"10vh",width:'auto'}} class='detail-text'></img>
      <img data-aos='fade-left-custom' data-aos-delay='800' src='/images/tengok-ragam/Text/Page 5/Asset 25.png' style={{height:"10vh",width:'auto'}} class='bold-hero-img'></img>
      <img data-aos='fade-right-custom' data-aos-delay='1200' src='/images/tengok-ragam/Text/Page 5/Asset 23.png' style={{height:"12vh",width:'auto'}} class='detail-text'></img>
      <img data-aos='fade-left-custom' data-aos-delay='1600'src='/images/tengok-ragam/Text/Page 5/Asset 24.png'style={{height:"10vh",width:'auto'}} ></img>
      <img data-aos='fade-right-custom' data-aos-delay='2000' src='/images/tengok-ragam/Text/Page 5/Asset 22.png' style={{height:"10vh",width:'auto'}} class='bold-hero-img'></img>
      <img data-aos='fade-left-custom' data-aos-delay='2400' src='/images/tengok-ragam/Text/Page 5/Asset 21.png'style={{height:"10vh",width:'auto'}}  class='bold-hero-img'></img>
    </div>
  )
}

export default Page4No5;