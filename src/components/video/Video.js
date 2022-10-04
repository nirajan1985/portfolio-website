import React from "react";
import clip from "../../video.mp4";
import "./Video.css";

const Video = () => {
  return (
    <div className="video_container">
      <video src={clip} autoPlay loop muted></video>
    </div>
  );
};

export default Video;
