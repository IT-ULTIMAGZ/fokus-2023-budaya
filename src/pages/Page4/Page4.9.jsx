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
      <div style={{height:'77vh',display:'flex',alignItems:'center'}}>
        <p data-aos='zoom-in-custom' style={{width:'75vw',fontSize:'calc(31/1920*100vw)',textAlign:'center',color:'#F4F3D3',fontFamily:'National2Medium',lineHeight:'1.8'}}>
          Indonesia dengan keberanekaragaman budayanya menghasilkan kekayaan yang tidak dapat dinilai 
          dari segi material. Sebagaimana yang tertuang dalam <b style={{fontFamily:'National2XBoldItalic'}}>Undang-Undang Nomor 5 Tahun 2017 </b>tentang
          pemajuan kebudayaan Indonesia, negara perlu mengembangkan nilai-nilai budayanya di tengah 
          peradaban dunia. Budaya Tanah Air hadir sebagai identitas dan karakter bangsa yang sudah
          seharusnya <i style={{fontFamily:'National2XBoldItalic'}}>dibanggakan</i> sehingga dijaga serta <i style={{fontFamily:'National2XBoldItalic'}}>dilestarikan dengan senang hati.</i> 
        </p>
      </div>
      {/* <img data-aos='zoom-in-custom' src='/images/tengok-ragam/Text/Page 9/Asset 36.png' style={{width:'75vw'}}></img> */}
      <div class='empty'></div>
    </div>
  )
}

export default Page4No9;