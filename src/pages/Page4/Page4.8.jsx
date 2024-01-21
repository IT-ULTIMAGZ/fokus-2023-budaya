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
        <div className="flex-column justify-center align-center"style={{width:'37vw',gap:'2vh'}}>
          {/* <img data-aos='fade-right-custom' data-aos-delay='1000' src="/images/tengok-ragam/Text/Page 8/Asset 35.png" style={{width:'100%'}}alt="" class='detail-text-2' /> */}
          <p data-aos='fade-right-custom' data-aos-delay='1000' style={{width:'100%',textAlign:'justify',fontFamily:'National2Medium',fontSize:'calc(24/1920*100vw)',color:"#F4F3D3"}}alt="" class='detail-text-2'> Selain budaya yang mengikuti perkembangan zaman, masyarakat juga harus tetap menghormati keberagaman budaya yang ada di nusantara. Tidak semua budaya nusantara memiliki ciri khas dan nilai yang sama serta dapat beradaptasi dengan perkembangan masa kini.

Contohnya, suku Baduy Dalam merupakan suku yang menjunjung tinggi adat istiadat. Berbeda dengan Baduy Luar yang menerima transformasi teknologi, Baduy Dalam masih mempertahankan keasrian adat istiadat mereka. Oleh karena itu,</p>
          <p data-aos='fade-right-custom' data-aos-delay='1000' style={{lineHeight:'1',width:'100%',textAlign:'justify',fontFamily:'National2CondensedBold',fontSize:'calc(51/1920*100vw)',color:'#F4F3D3'}} class='detail-text-2'>perbedaan nilai yang ada di setiap budaya harus tetap dihormati sebagai bentuk menghargai keberanekaragaman budaya nusantara.</p>
          {/* <img  data-aos='fade-right-custom' data-aos-delay='1500' src="/images/tengok-ragam/Text/Page 8/Asset 34.png"style={{width:'100%'}} alt="" class='detail-text-2' /> */}
        </div>
      </div>
    </div>
  )
}


export default Page4No8;