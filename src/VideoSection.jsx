import React, { useRef, useState } from 'react';
import style from './VideoSection.module.css'

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

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
      <video ref={videoRef} className={style.video} loop autoPlay muted={isMuted}>
        <source src="/video/13111085_360_640_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={style.shadowOverlay}>
      </div>
      <div className={style.overlay}>
        <div className={style.textBlock}>
          <h1>🍕 美味時刻</h1>
          <h4>誘人的起司拉絲，每一口都是幸福的滋味！</h4>
          <p>新鮮出爐的披薩，酥脆外皮搭配濃郁起司與豐富配料，香氣四溢，每一片都是完美享受。<br />無論是派對、聚會還是獨享時光，這一刻就該好好品味！🍕✨</p>
          <div className={style.moreInfoBlock}>
            <button className={`${style.button} ${style.playButton}`} onClick={togglePlayPause}>
              {isPlaying ? '暫停' : '播放'}
            </button>
            <button className={`${style.button} ${style.moreInfoButton}`}>更多資訊</button>
          </div>
        </div>
        <div className={style.RBButtonBlock}>
          <div className={style.buttonBlock}>
            <button className={style.button} onClick={toggleMute}>
              {isMuted ? '開啟聲音' : '靜音'}
            </button>
          </div>
          <div className={style.ageRating}>18+
          </div>
        </div>
      </div>
    </div>

  );
};

export default VideoSection;
