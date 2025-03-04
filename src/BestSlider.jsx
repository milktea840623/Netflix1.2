import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import styles from './BestSlider.module.css'; // 使用 CSS 模块

const BestSlider = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation]} // 引入 Navigation 模块
      slidesPerView={4} // 每次显示3张图片
      spaceBetween={10} // 图片之间的间距
      navigation={true} // 启用导航按钮(左右箭头切换)
      loop={true} // 启用循环模式
      allowTouchMove={false} // 禁用触摸滑动
    >
      {images.map((image, index) => {
        return (
          <SwiperSlide className={styles.SwiperSlide} key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className={styles.slideImage} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};
export default BestSlider;
