import React from "react";
import "./Cover.css";
import coverVideo from "./assets/pexels-cottonbro-8262689.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>BACKYARD CINEMA</h1>
      <p>Cinema Under the Stars.</p>
    </div>
  );
};

export default Cover;