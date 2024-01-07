import './css/part3.css';
import LocomotiveScroll from 'locomotive-scroll';
// Vendors


const Part3 = () => {
    const locomotiveScroll = new LocomotiveScroll();
    return (
        <div className="part3Section">
            <p data-scroll
              data-scroll-speed="0.6"
              style={{ transform: 'translate3d(0,10vh,0)' }}
            >
                Keberagaman budaya Indonesia bukan lagi hal asing di mata dunia. <br />
                Indonesia memiliki keberagaman budaya yang sangat banyak <br />
                dengan ciri khasnya yang unik di setiap wilayahnya. Di balik hal itu, ada <br />
                beberapa tokoh yang menjaga seni tersebut agar tetap dikenal di era sekarang.  </p>
            <p data-scroll
              data-scroll-speed="0.4"
              style={{ transform: 'translate3d(0,0vh,0)' }}>
                
            Berikut adalah lima tokoh pengrajin dan pelestari seni budaya Indonesia <br /> yang <i>Ultimates</i> harus tahu!   
            </p>

        </div>
    )
}

export default Part3;