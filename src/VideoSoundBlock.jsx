import style from './VideoSoundBlock.module.css'

const VideoSoundBlock = ({isMuted,toggleMute}) => {

    return(
        <div className={style.videoSoundBlock}>
            <button className={style.videoSoundButton} onClick={toggleMute}>
                <img src={isMuted ? '/image/mute.png':'/image/sound.png'} 
                alt="sound" className={style.iconSound}/>
                {isMuted ? '靜音' : '開啟音效'}
            </button>
            <div className= {style.ageRating}>8+</div>
        </div>
    );
}

export default VideoSoundBlock;