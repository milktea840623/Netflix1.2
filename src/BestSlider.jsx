import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import styles from './BestSlider.module.css'; // 使用 CSS 模块

const BestSlider = () => {
  const images = [
    '/src/assets/image/R1.jpg',
    '/src/assets/image/R2.jpg',
    '/src/assets/image/R3.jpg',
    '/src/assets/image/R4.jpeg',
    '/src/assets/image/R5.jpg',
    '/src/assets/image/R6.jpg',
    '/src/assets/image/R7.jpg',
    '/src/assets/image/R8.jpg',
    '/src/assets/image/R9.jpg',
    '/src/assets/image/R10.jpg',
  ];

  return (
    <Swiper
      style={{ overflow: 'visible' }}
      modules={[Navigation]} // 引入 Navigation 模块
      slidesPerView={4} // 每次显示3张图片
      spaceBetween={10} // 图片之间的间距
      navigation={true} // 启用导航按钮(左右箭头切换)
      loop={true} // 启用循环模式
      allowTouchMove={false} // 禁用触摸滑动
    >
      {images.map((image, index) => (
        <SwiperSlide className={styles.SwiperSlide} key={index}>
          <img src={image} alt={`Slide ${index + 1}`} className={styles.slideImage} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BestSlider;
