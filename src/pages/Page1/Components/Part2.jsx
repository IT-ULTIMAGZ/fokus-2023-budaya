import React from "react";
import bg from "../Assets/illust/BG_PAGE_2.jpg";

const Part2 = () => {
  return (
    <div
      className="mainbg"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    ></div>
  );
};

export default Part2;
