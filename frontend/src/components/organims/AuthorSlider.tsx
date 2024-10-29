import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { PaginationOptions } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import AuthorBigCard from '../molecules/AuthorBigCard.tsx';
import { Author } from '../../data-types.ts';

export interface AuthorSliderProps {
  author: Author;
}

const AuthorSlider: React.FunctionComponent<AuthorSliderProps> = ({
  author,
}: AuthorSliderProps) => {
  const swiperRef = useRef<SwiperType>();

  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<span id="bullet-${index}" class="${className} w-0.5 h-16 bg-gray-400 rounded-full my-1 transition-all duration-300 swiper-pagination-bullet-custom hover:bg-[#937DC2]"></span>`;
    },
  };

  return (
    <div className="relative my-24 flex px-24 h-[535px] 2xl:px-[250px]">
      <Swiper
        modules={[Navigation, Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        navigation
        pagination={pagination}
        direction="vertical"
        className="w-full h-full"
      >
        {[...Array(4)].map((_, i) => (
          <SwiperSlide key={i} style={{ height: '100%' }} className={'ml-10'}>
            <AuthorBigCard author={author}></AuthorBigCard>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="absolute w-10 h-10 bottom-0 left-1/2 translate-x-[-30px] z-30"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <img src="/arrow-left.svg" alt="" className="w-full h-full" />
      </button>
      <button
        className="absolute w-10 h-10 bottom-0 left-1/2 z-30 translate-x-[30px]"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <img src="/arrow-right.svg" alt="" className="w-full h-full" />
      </button>
    </div>
  );
};

export default AuthorSlider;
