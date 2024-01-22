import AOS from 'aos';
function Page4No4() {
  AOS.init({
    duration : 600,
    once: false,
  });
  const styles = {
    'background': 'url("./images/tengok-ragam/bg/Page 4.png")',
    'backgroundPosition':'center',
    'backgroundColor' :'#f4f3d3',
    'backgroundSize':'100vw 100vh',
    'width':'100vw',
    'height':'100vh',
  }
  
  return (
    <div class='page flex-column justify-center align-center' style={styles}>
      <img data-aos='fade-up-right-custom'src='./images/tengok-ragam/Text/Page 4/1x/Asset 20.png' style={{width:"45vw"}} class='detail-text'></img>
    </div>
  )
}

export default Page4No4;