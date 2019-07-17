import React from "react";

const SplashVideo = () => {
  return (
    <div className="cover-video splash-video">
      <video width="320" height="240" autoPlay loop muted>
        <source src="/assets/videos/splash.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default SplashVideo;
