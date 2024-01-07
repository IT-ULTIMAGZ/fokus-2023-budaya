import AOS from "aos";
function Page4No8() {
  AOS.init({
    duration : 1000,
    once: false,
  });
  const styles = {
    'backgroundImage': 'url("/images/tengok-ragam/bg/Page 8.png")',
    'backgroundColor':'#ffaf00',
    'backgroundSize': '100vw 100vh',
    'backgroundPosition': 'center',
    'width': '100vw',
    'height': '100vh',
  }
  return(
    <div class='page flex-column justify-center align-center' style={styles}>
      <div  data-aos='fade-right-custom'class='flex-row justify-around align-center' style={{gap:'5vw'}}>
        <img src='/images/tengok-ragam/ilustrasi/suku baduy luar (teknologi).png' style={{width:'31vw'}}></img>
        <div className="flex-column justify-center align-center"style={{width:'29vw'}}>
          <img data-aos='fade-right-custom' data-aos-delay='1000' src="/images/tengok-ragam/Text/Page 8/Asset 35.png" style={{width:'100%'}}alt="" class='detail-text-2' />
          <img  data-aos='fade-right-custom' data-aos-delay='1500' src="/images/tengok-ragam/Text/Page 8/Asset 34.png"style={{width:'100%'}} alt="" class='detail-text-2' />
        </div>
      </div>
    </div>
  )
}


export default Page4No8;