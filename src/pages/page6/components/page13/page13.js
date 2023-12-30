import "./stylepage13.css";
import tas from "../../assets/gambar2.png";

function page13(){
    return(
        <div className="page13">
            <img className="tas13" src={tas} alt="" />
            <div className="isi13">
                <h1 className="condensedBold kalimatisi13" style={{fontSize:'72px', width:'84%', lineHeight:'1.2'}}>Noken merupakan tas tradisional masyarakat Papua yang biasanya digunakan untuk membawa hasil 
                    pertanian dan dagangan ke pasar.</h1>
                <p className="regular footer13" style={{fontSize:'20px', marginTop:'6%', width:'49%'}}>Berbeda dari penggunaan tas pada umumnya, noken biasanya dibawa dengan menggunakan kepala. Lalu, 
                    noken dapat digunakan sebagai penutup kepala dan untuk mengangkut berbagai barang.</p>
            </div>
        </div>
    )
}

export default page13;