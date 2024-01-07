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
      <img data-aos='fade-right-custom' data-aos-duration='1500' src='/images/tengok-ragam/Text/Page 5/Asset 26.png' style={{width:"55vw"}} class='detail-text'></img>
      <img data-aos='fade-left-custom' data-aos-delay='800' src='/images/tengok-ragam/Text/Page 5/Asset 25.png' style={{width:"55vw"}}class='bold-hero-img'></img>
      <img data-aos='fade-right-custom' data-aos-delay='1300' src='/images/tengok-ragam/Text/Page 5/Asset 23.png' style={{width:"55vw"}}class='detail-text'></img>
      <img data-aos='fade-left-custom' data-aos-delay='1800'src='/images/tengok-ragam/Text/Page 5/Asset 24.png'style={{width:"55vw"}}></img>
      <img data-aos='fade-right-custom' data-aos-delay='2300' src='/images/tengok-ragam/Text/Page 5/Asset 22.png' style={{width:"55vw"}}class='bold-hero-img'></img>
      <img data-aos='fade-left-custom' data-aos-delay='2800' src='/images/tengok-ragam/Text/Page 5/Asset 21.png'style={{width:"55vw"}} class='bold-hero-img'></img>
    </div>
  )
}

export default Page4No5;