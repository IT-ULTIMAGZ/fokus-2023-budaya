import AOS from 'aos';

function Page4No1() {
  AOS.init({
    duration : 1200,
    offset: 330, 
    once: false,
  });
  return(
    <div class='page' style={{
      'backgroundImage': `url("images/tengok-ragam/bg/Page 1.png")`,
      'backgroundPosition' : 'center',
      'backgroundColor' :'#f4f3d3',
      'backgroundSize':'cover',
      'display':'flex',
      'flexDirection':'column',
      'justifyContent':'center',
      'alignItems': 'center',
      'width':'100vw',
      'height':'100vh',

    }}>

      <img 
        style={{width: '60vw'}}
        data-aos-once="false"
        data-aos='zoom-out-custom'  src='/images/tengok-ragam/Text/Page 1/Asset 16.png'/>
      <img data-aos='fade-right-custom'  src='/images/tengok-ragam/Text/Page 1/Asset 15.png' style={{width:'50vw'}}/>

    </div>
  )
}


export default Page4No1;