import AOS from 'aos';

function Page4No9() {
  AOS.init({
    duration : 1000,
    once: false,
  });
  const styles = {
    'backgroundImage': 'url("/images/tengok-ragam/bg/Page 9.png")',
    'backgroundColor':'#ffaf00',
    'backgroundSize':'100vw 100vh',
    'width':'100vw',
    'height':'100vh',
  }
  return(
    <div class='page flex-column justify-center align-center' style={styles}>
      <img data-aos='zoom-in-custom' src='/images/tengok-ragam/Text/Page 9/Asset 36.png' style={{width:'75vw'}}></img>
      <div class='empty'></div>
    </div>
  )
}

export default Page4No9;