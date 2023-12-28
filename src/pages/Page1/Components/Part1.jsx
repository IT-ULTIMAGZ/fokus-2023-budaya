import React from "react";
import bg from "../Assets/illust/BG_PAGE_1.png";
import title from "../Assets/text/PAGE 1_1.png";
import penulis from "../Assets/text/PAGE_1_2.png";
import editor from "../Assets/text/PAGE_1_3.png";
import panah from "../Assets/text/PAGE_1_4.png";

const Part1 = () => {
  return (
    <div
      className="mainbg"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: "2%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={title}
          alt="judul"
          style={{ width: "90%" }}
        />
        <img
          src={panah}
          className="panah"
          alt="panah"
          style={{
            height: "22%",
            position: "absolute",
            left: "51.5%",
            top: "8%",
          }}
        />
      </div>
      <div
        className="titleCreator"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2%",
          height: "5%",
          width: "100%",
          // background: "black",
        }}
      >
        <img src={penulis} alt="penulis" />
        <img
          src={editor}
          alt="editor"
          style={{ marginLeft: "5%" }}
        />
      </div>
    </div>
  );
};

export default Part1;
