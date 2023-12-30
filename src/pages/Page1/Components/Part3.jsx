import React from "react";
import garis from "../Assets/bg/SUPERGRAFIS PAGE3-4.png";
import koin1 from "../Assets/illust/Q_COIN_1.png";
import koin2 from "../Assets/illust/Q_COIN_2.png";
import koin3 from "../Assets/illust/Q_COIN_3.png";

const Part3 = () => {
  return (
    <div
      className="mainbg"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="bgkoin">
        <img className="gariskoin" src={garis} alt="garis" />
        <img className="koin" src={koin1} alt="koin" />
      </div>
      <div className="spacerkoin" />
      <div className="bgkoin">
        <img className="gariskoin" src={garis} alt="garis" />
        <img className="koin" src={koin2} alt="koin" />
      </div>
      <div className="spacerkoin" />
      <div className="bgkoin">
        <img className="gariskoin" src={garis} alt="garis" />
        <img className="koin" src={koin3} alt="koin" />
      </div>
    </div>
  );
};

export default Part3;
