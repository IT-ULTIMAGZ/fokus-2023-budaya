import Page4No1 from "./Page4.1";
import Page4No2 from "./Page4.2";
import Page4No3 from "./Page4.3";
import Page4No4 from "./Page4.4";
import Page4No5 from "./Page4.5";
import Page4No6 from "./Page4.6";
import Page4No7 from "./Page4.7";
import Page4No8 from "./Page4.8";
import Page4No9 from "./Page4.9";
import BackButton from "../../components/BackButton";

function Page4() {
  return(
    <div style={{width:'100vw',overflow:'hidden'}}>
      <BackButton style={{position:'fixed',bottom:'calc(72/1920*100vw)',left:'calc(72/1920*100vw)'}}></BackButton>
      <Page4No1></Page4No1>
      <Page4No2></Page4No2>
      <Page4No3></Page4No3>
      <Page4No4></Page4No4>
      <Page4No5></Page4No5>
      <Page4No6></Page4No6>
      <Page4No7></Page4No7>
      <Page4No8></Page4No8>
      <Page4No9></Page4No9>
    </div>
    
  )
}

export default Page4;