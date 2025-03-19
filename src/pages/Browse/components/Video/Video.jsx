import style from './Video.module.css'
import VideoIntroBlock from './components/VideoIntroBlock.jsx'
import VideoSoundBlock from './components/VideoSoundBlock.jsx'
import { useRef, useState } from 'react'

const VideoSection = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    const toggleMute = () => {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };


    return (
        <div className={style.videoSection}>
            <video ref={videoRef} className={style.video} loop autoPlay muted >
                <source src="/video/beach.mp4" type="video/mp4" />
                Your browser does not support the video tag
            </video>
            <div className={style.videoIntroduction}>
                <h1 className={style.videoIntroTitle}>☀️ 夏日幻想</h1>
                <h2 className={style.videoIntroSubtitle}>踏上夢幻海岸，感受自由與輕鬆</h2>
                <p className={style.videoIntroDescription}>在陽光普照的沙灘上，海浪輕拂，心靈隨風起舞<br />迎接一場屬於你的夏日冒險，快來感受海岸的魅力！</p>
                <div>
                    <VideoIntroBlock isPlaying={isPlaying} togglePlayPause={togglePlayPause} />
                </div>
            </div>
            <div>
                <VideoSoundBlock isMuted={isMuted} toggleMute={toggleMute} />
            </div>
            </div>

    )
}

export default VideoSection;