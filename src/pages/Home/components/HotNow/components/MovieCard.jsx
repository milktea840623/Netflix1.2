import React from 'react';
import Style from './MovieCard.module.css'; 

const MovieCard = ({ movie, index, onClick }) => {

    return (
        <div 
            className={Style.movieCard}
            onClick={() => onClick(movie)}
            role="button"
            aria-label={`播放 ${movie.title}`}
        >
            <div className={Style.numberBadge}>{index + 1}</div>
            <img 
                src={movie.path} 
                alt={movie.title} 
                className={Style.movieSliderImage} 
                draggable="false"
            />
        </div>
    );
};

export default MovieCard;