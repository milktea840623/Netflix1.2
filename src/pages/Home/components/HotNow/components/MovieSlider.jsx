import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"
import Style from './MovieSlider.module.css';
import 'swiper/swiper-bundle.css';


const MovieSlider = () => {
    const image = [
        'image/Arise.jpg',
        'image/Dcat.jpg',
        'image/Xgll.jpg',
        'image/Ddd.jpg',
        'image/Arise.jpg',
        'image/Dcat.jpg',
        'image/Xgll.jpg',
        'image/Ddd.jpg',
        'image/Arise.jpg',
        'image/Dcat.jpg',
        'image/Xgll.jpg',
        'image/Ddd.jpg',
        'image/Arise.jpg',
        'image/Dcat.jpg',
        'image/Xgll.jpg',
        'image/Ddd.jpg',
      ]

    return (


        
        <Swiper
        modules={[Navigation]}
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        alolowTouchMove={false}
        >
            {image.map((image,index)=>{
                return(
                    <SwiperSlide className={Style.movieSliderItem} key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} className={Style.movieSliderImage} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )

}

export default MovieSlider;