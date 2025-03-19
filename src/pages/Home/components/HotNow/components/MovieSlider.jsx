import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"
import Style from './MovieSlider.module.css';
import 'swiper/swiper-bundle.css';

const MovieSlider = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    
    const movies = [
        { id: 1, path: 'image/girl.jpg', title: '我獨自升級' },
        { id: 2, path: 'image/Knife.jpg', title: '鬼滅之刃' },
        { id: 3, path: 'image/Xgll.jpg', title: '香格里拉Ｘ開拓異境' },
        { id: 4, path: 'image/Shop.jpg', title: '異世界美食家' },
        { id: 5, path: 'image/Arise.jpg', title: '我獨自升級' },
        { id: 6, path: 'image/Knife.jpg', title: '鬼滅之刃' },
        { id: 7, path: 'image/Xgll.jpg', title: '香格里拉Ｘ開拓異境' },
        { id: 8, path: 'image/Shop.jpg', title: '異世界美食家' },
        { id: 9, path: 'image/girl.jpg', title: '我獨自升級' },
        { id: 10, path: 'image/Knife.jpg', title: '鬼滅之刃' },
        { id: 11, path: 'image/Xgll.jpg', title: '香格里拉Ｘ開拓異境' },
        { id: 12, path: 'image/Shop.jpg', title: '異世界美食家' },
        // ... 其他電影
    ];

    const handleImageClick = (movie) => {
        setSelectedImage(movie);
    };

    const handleModalClose = () => {
        setSelectedImage(null);
    };

    return (
        <div className={Style.sliderContainer}>
            <Swiper
                modules={[Navigation]}
                slidesPerView={7}
                spaceBetween={40}
                navigation={true}
                allowTouchMove={false}
                className={Style.movieSwiper}
            >
                {movies.map((movie, index) => (
                    <SwiperSlide className={Style.movieSliderItem} key={movie.id}>
                        <button 
                            className={Style.imageButton}
                            onClick={() => handleImageClick(movie)}
                        >
                            <div className={Style.numberBadge}>{index + 1}</div>
                            <img 
                                src={movie.path} 
                                alt={movie.title} 
                                className={Style.movieSliderImage} 
                            />
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* 彈出視窗 */}
            {selectedImage && (
                <div className={Style.modal} onClick={handleModalClose}>
                    <div className={Style.modalContent} onClick={e => e.stopPropagation()}>
                        <button className={Style.closeButton} onClick={handleModalClose}>
                            ✕
                        </button>
                        <img 
                            src={selectedImage.path} 
                            alt={selectedImage.title} 
                            className={Style.modalImage} 
                        />
                        <h2 className={Style.modalTitle}>{selectedImage.title}</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieSlider;