import "./css/part2.css";

const Part2 = () => {
    return (
        <div className="pelestariPart2">
            <div className="pelestariContainer">
                <img src="./images/lima-pelestari/1.png" onClick={()=>window.location.href='#naomiSusilowati'} className="ilustrasiPelestari ilus1 ilus_img" alt="" />
                <img src="./images/lima-pelestari/4.png" onClick={()=>window.location.href='#darrylSanggelorang'}className="ilustrasiPelestari ilus2 ilus_img" alt="" />
                <img src="./images/lima-pelestari/3.png" onClick={()=>window.location.href='#woroMustikoSiwi'}className="ilustrasiPelestari ilus3 ilus_img" alt="" />
                <div className="ilus4Frame ">
                    <img src="./images/lima-pelestari/2.png" onClick={()=>window.location.href='#lilisSuryani'}className="ilustrasiPelestari ilus4"alt="" />
                    <img src="./images/lima-pelestari/5.png" onClick={()=>window.location.href='#abahEngkus'}className="ilustrasiPelestari ilus5"alt="" />
                </div>
            </div>
            <div className="shadowPelestariContainer"></div>
        </div>
    )
}

export default Part2;