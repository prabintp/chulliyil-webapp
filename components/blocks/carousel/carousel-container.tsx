// components/SwiperCarousel.tsx
import React, { ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

interface CarouselProps {
  config: any;
  children: ReactNode[];
}

const CarouselContainer: React.FC<CarouselProps> = ({ config, children }) => {
  return (
   <> {config && (<Swiper
      spaceBetween={config.spaceBetween || 30}
      slidesPerView={config.slidesPerView || 1}
      navigation={config.navigation || true}
      pagination={config.pagination || { clickable: true }}
      modules={[Pagination, Navigation, Autoplay]}
      loop={config.loop || true}
      pagination-dynamic-bullets="true"
      autoplay={config.enableAutoplay ? config.autoplay || { delay: 3000 }  : undefined}
      grab-cursor="true"
      className="w-full"
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>
          <div>{child}</div>
        </SwiperSlide>
      ))}
    </Swiper>)} </>
  )
};

export default CarouselContainer;

