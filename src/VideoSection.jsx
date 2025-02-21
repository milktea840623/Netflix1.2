import React, { useRef, useState } from 'react';
import style from './VideoSection.module.css'

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className={style.videoSection}>
      <video ref={videoRef} className={style.video} loop muted>
        <source src="../public/video/13111085_360_640_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={style.overlay}>
        <h1>影片介紹</h1>
        <p>這是一段影片的介紹文字。</p>
        <button className={style.button} onClick={togglePlayPause}>
          {isPlaying ? '暫停' : '播放'}
        </button>
        <button className={style.button} onClick={toggleMute}>
          {isMuted ? '開啟聲音' : '靜音'}
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
