import AOS from 'aos';
function Page4No3() {
  AOS.init({
    duration : 1200,
    once: false,
  });

  const styles = {
    'backgroundImage':'url("/images/tengok-ragam/bg/Page 3.png")',
    'backgroundPosition':'center',
    'backgroundColor' :'#f4f3d3',
    'backgroundSize':'100vw 100vh',
    'width':'100vw',
    'height':'100vh',
    'padding':'40px'
  }

  const empty = {
    'width': '20%',
    'height':'100%'
  }

  return(
    <div class='page flex-row justify-center' style={styles}>
      {/* <div class='empty' style={empty}></div> */}
      <div class='page4no3-images flex-column justify-center'>
        <img data-aos='fade-right-custom' data-aos-duration='1000' src='/images/tengok-ragam/Text/Page 3/Asset 18.png' style={{width:'50vw'}}></img>
        <img data-aos='fade-up-left' data-aos-duration='500' data-aos-delay='800' src='/images/tengok-ragam/Text/Page 3/Asset 19.png' style={{width:'50vw'}}></img>

      </div>
    </div>
  )
}


export default Page4No3;