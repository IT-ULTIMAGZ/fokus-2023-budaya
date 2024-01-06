function Page4No6() {
  const styles = {
    'backgroundImage':'url("/images/tengok-ragam/bg/Page 6.png")',
    'backgroundSize':'cover',
    'backgroundPosition':'center',
    'display':'flex',
    'flexDirection':'row',
    'justifyContent':'center',
    'alignItems':'center',
    'gap':'5vw'

  }


  return(
    <div class='page ' style={styles}>
      {/* <div style={{display:'flex',height:'fit-content'}}> */}
        <div style={{width:'50vw',height:'fit-content'}}>
          <img style={{width:'100%'}}src='/images/tengok-ragam/Text/Page 6/Asset 30.png'></img>
          <img style={{width:'100%',height:'auto'}}src='/images/tengok-ragam/Text/Page 6/Asset 31.png'></img>
        </div>
        <img style={{width:'20vw',height:'auto'}}src="/images/tengok-ragam/Text/Page 6/budaya pecah telur.png" alt="" />
      {/* </div> */}

    </div>
  )
}

export default Page4No6;