import AOS from 'aos';

function Page4No7() {
  AOS.init({
    duration : 1000,
    once: false,
  });
  const styles = {
    'backgroundImage': 'url("/images/tengok-ragam/bg/Page 7.png")',
    'backgroundColor':'#ffaf00',
    'backgroundSize': '100vw 100vh',
    'backgroundPosition': 'center',
    'width': '100vw',
    'height': '100vh',
    'backgroundRepeat': 'no-repeat'
  }

  return(
    <div class='page flex-column align-center justify-center' style={styles}>
      <img data-aos='zoom-in-custom' src='/images/tengok-ragam/ilustrasi/halobali.png' style={{width:'80vw',height:'52.5vh'}} class='halobali'></img>
      <div className=" flex-row justify-start align-start" style={{width:'80vw', height:'47.5vh',display:'flex',justifyContent:'center',gap:'3vw'}}>
        <img data-aos='fade-up-pop' src='/images/tengok-ragam/Text/Page 7/Asset 32.png'style={{width:'50%',padding:'3vw 0vw 5vw 10vw'}} class='detail-text-2'></img>
        <img data-aos='fade-up-pop' src='/images/tengok-ragam/Text/Page 7/Asset 33.png' style={{width:'50%',padding:'3vw 10vw 5vw 0vw'}}class='detail-text-3'></img>
      </div>
    </div>
  )
}

export default Page4No7;