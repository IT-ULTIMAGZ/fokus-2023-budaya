import './css/part7.css';
import AOS from 'aos';
const Part7 = () => {
    AOS.init({
        duration : 1000,
        once: false,
      });
    return (
        <div className="part7Section">
            <div className="part7Section_textKiri">
                <p data-aos='fade-right-custom'>Akhirnya, setelah 23 tahun bekerja sebagai karyawan,<span>LILIS</span> <br /> memutuskan untuk </p>
                <p data-aos='fade-up-pop'>Meskipun merupakan keturunan Jawa, <span>LILIS</span> memproduksi <b>batik <br />tulis</b> 
                     dengan motif Kalimantan, tempat di mana <span>LILIS</span>  belajar <br /> 
                    membatik. Biasanya, ia menggunakan corak khas <br />
                    <b>Kalimantan Timur</b>  yang mana terdapat ukiran Dayak, ikan dan <br />
                     burung enggang, motif batang garing, ataupun tunjung siring.  </p>
            </div>
            <div className="part7Section_textKanan">
                <p data-aos='fade-left-custom'>Menurut <span>LILIS</span>, Batik Kalimantan memiliki warna yang lebih <br /> cerah seperti </p>
                <div>
                    <p  data-aos='fade-up-pop'>Berbeda dari batik Jawa yang cenderung menggunakan warna lebih <br /> 
                        tenang seperti cokelat, dikutip dari <i>diskominfo.kaltimprov.go.id</i> .</p>
                    

                    <p  data-aos='fade-up-pop'>Selama membuka bisnis batiknya sendiri, <span>LILIS</span> juga sering mengikuti <br />
                        ajang kompetisi untuk tingkat lokal dan nasional. Ia juga <br />
                        memperdagangkan berbagai motif dan bahan kain batik seperti <br /> <b>katun dan sutra.</b>   </p>
                </div>
            </div>
        </div>
    )
}

export default Part7;