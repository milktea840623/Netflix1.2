import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"
import Style from './MovieSlider.module.css';
import MovieModal from './MovieModal.jsx';
import MovieCard from './MovieCard.jsx';
import 'swiper/swiper-bundle.css';

const MovieSlider = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const movies = [
        { id: 1, path: 'image/home/no1.jpg', title: '我獨自升級' },
        { id: 2, path: 'image/home/no2.jpg', title: '黑色五葉草' },
        { id: 3, path: 'image/home/no3.jpg', title: '我的英雄學院' },
        { id: 4, path: 'image/home/no4.jpg', title: '藥師少女的獨語' },
        { id: 5, path: 'image/home/no5.jpg', title: '神隱少女' },
        { id: 6, path: 'image/home/no6.jpg', title: '名偵探柯南Ｘ迷宮的十字路' },
        { id: 7, path: 'image/home/no7.jpg', title: '戀空' },
        { id: 8, path: 'image/home/no8.jpg', title: '霍爾的移動城堡' },
        { id: 9, path: 'image/home/no9.jpg', title: '海的開始' },
        { id: 10, path: 'image/home/no10.jpg', title: '陳情令' },
        { id: 11, path: 'image/home/no11.jpg', title: '機智醫生生活' },
        { id: 12, path: 'image/home/no12.jpg', title: '還魂2' },
    ];

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    const handleModalClose = () => {
        setSelectedMovie(null);
    };

    return (
        <div className={Style.sliderContainer}>
            <Swiper
                modules={[Navigation]}
                slidesPerView={7}
                spaceBetween={50}
                navigation={true}
                allowTouchMove={false}
                className={Style.movieSwiper}
                breakpoints={{
                    600: {
                        slidesPerView: 4,
                        spaceBetween: 12
                    },
                    960: {
                        slidesPerView: 5,
                        spaceBetween: 14
                    },
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 16
                    }
                }}
            >
                {movies.map((movie, index) => (
                    <SwiperSlide className={Style.movieSliderItem} key={movie.id}>
                        <MovieCard
                            movie={movie}
                            index={index}
                            onClick={handleMovieClick}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            
            {selectedMovie && (
                <MovieModal
                    movie={selectedMovie}
                    onClose={handleModalClose}
                />
            )}
        </div>
    );
};

export default MovieSlider;