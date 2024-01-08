import "./css/part1.css";
import AOS from "aos";
const Part1 = () => {
    AOS.init({
        duration : 1000,
        once: false,
      });
    return (
        <div className="part1Section">
            <div><p style={{color:"rgb(9,107,72)"}}>Penulis:</p><p style={{color:"black"}}>Margaretha</p></div>
            <div><p style={{color:"rgb(9,107,72)"}}>Editor:</p><p>Alycia Catelyn</p></div>
        </div>
    )
}

export default Part1;