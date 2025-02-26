import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import styles from './BestSlider.module.css'; // 使用 CSS 模块

const BestSlider = () => {
    const images = [
        '/src/assets/image/infor sign.png',
        '/src/assets/image/mute_106517.png',
        '/src/assets/image/play_pause_icon_137298.png',
        '/src/assets/image/right-arrow.png',
        '/src/assets/image/sound.png',
    ];

    return (
        <Swiper
            modules={[Navigation]} // 引入 Navigation 模块
            slidesPerView={2} // 每次显示3张图片
            spaceBetween={10} // 图片之间的间距
            navigation={true} // 启用导航按钮
            loop={true} // 启用循环模式
            allowTouchMove={false} // 禁用触摸滑动
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image} alt={`Slide ${index + 1}`} className={styles.slideImage} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default BestSlider;
