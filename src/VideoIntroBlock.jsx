import React from 'react';
import Style from './VideoIntroBlock.module.css'

const VideoIntroBlock = ({ isPlaying, togglePlayPause }) => {

    return (
        <div className={Style.videoIntroBlock}>
            <button className={`${Style.button} ${Style.videoPlayPauseButton}`} onClick={togglePlayPause}>
                <img src="/image/play_pause.png" alt="play_pause" className={Style.videoPlayPauseButtonIcon}/>
                {isPlaying ? '暫停': '播放'}
        </button>
            <a href="#moreInfo">
                <button className={`${Style.button} ${Style.videoMoreInfoButton}`}>
                    <img src="/image/infoSign.png" alt="infoSign" className={Style.videoMoreInfoButtonIcon}/>
                    更多資訊
                </button>
            </a>
        </div>
    )
}

export default VideoIntroBlock;