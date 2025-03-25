import React from 'react';
import Style from './MovieModal.module.css';

const MovieModal = ({ movie, onClose }) => {
    if (!movie) return null;
    
    return (
        <div className={Style.modal} onClick={onClose}>
            <div className={Style.modalContent} onClick={e => e.stopPropagation()}>
                <button className={Style.closeButton} onClick={onClose}>✕</button>
                <div className={Style.modalLayout}>
                    <div className={Style.modalImageContainer}>
                        <img src={movie.path} alt={movie.title} className={Style.modalImage} />
                    </div>
                    <div className={Style.modalInfo}>
                        <h2 className={Style.modalTitle}>{movie.title}</h2>
                        <div className={Style.modalMetadata}>
                            <span className={Style.rating}>15+</span>
                            <span className={Style.year}>2023</span>
                        </div>
                        <p className={Style.modalDescription}>
                            《{movie.title}》是一部精彩的影片，充滿了動人的情節和精彩的表演。
                        </p>
                        <div className={Style.modalActions}>
                            <button className={Style.playButton}>
                                <span className={Style.playIcon}>▶</span> 播放
                            </button>
                            <button className={Style.moreInfoButton}>更多資訊</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;