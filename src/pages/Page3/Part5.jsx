import './css/part5.css';
import AOS from 'aos';

const Part5 = () => {
    AOS.init({
        duration : 1000,
        once: false,
      });

    return (
        <div className="part5Section">
            <div className="part5Section_textKiri">
                <p data-aos='fade-up-custom'>Usaha <b>Batik Lasem</b> ini dimulai pada saat <span>NAOMI</span> <br />
                 dipanggil oleh keluarganya untuk melanjutkan bisnis </p>
                <p data-aos='fade-up-custom'>Ia mulai belajar perlahan-lahan mengenai <b>Batik Lasem</b>, kemudian <br />
                mengumpulkan pengrajin dan karyawan. Melalui upaya ambisiusnya,<br />
                 bisnis <b>Batik Lasem</b> pun berhasil dibangun kembali.  </p>
            </div>
            <div className="part5Section_textKanan">
                <p  data-aos='fade-up-custom'>Tidak hanya populer di daerahnya, <b>Lasem</b>, batik karya <span>NAOMI</span> juga dikirim ke <br /> kota lain seperti</p>
                <p data-aos='fade-up-custom'>Selain sebagai pengrajin dan pengusaha batik, <span>NAOMI</span> juga gemar mengisi <br />
                 waktu luang untuk melakukan seminar guna membagi ilmunya mengenai  <br />
                 <b>Batik Lasem</b>.</p>
            </div>
        </div>
    )
}

export default Part5