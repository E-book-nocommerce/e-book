import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';

const BookDetailSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className="flex flex-row-reverse items-start">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={'h-[653px] w-[412px] relative'}
      >
        <SwiperSlide>
          <div className="bg-purple w-full h-full"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-purple w-full h-full"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-purple w-full h-full"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-purple w-full h-full "></div>
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={21}
        slidesPerView={'auto'}
        direction={'vertical'}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-40 mr-5 hidden md:block"
      >
        <SwiperSlide style={{ maxWidth: '148px', height: '148px' }}>
          <div className="py-4 px-6 w-full h-full border-solid border-[1px] border-purple"></div>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: '148px', height: '148px' }}>
          <div className="py-4 px-6 w-full h-full border-solid border-[1px] border-purple"></div>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: '148px', height: '148px' }}>
          <div className="py-4 px-6 w-full h-full border-solid border-[1px] border-purple"></div>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: '148px', height: '148px' }}>
          <div className="py-4 px-6 w-full h-full border-solid border-[1px] border-purple"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BookDetailSlider;
