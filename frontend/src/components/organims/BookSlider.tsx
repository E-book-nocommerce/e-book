import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import BookCard from '../molecules/BookCard.tsx';
import { PaginationOptions } from 'swiper/types';
import { Book } from '../../data-types.ts';

export interface BookSliderProps {
  title: string;
  books: Book[];
}

const BookSlider = ({ title, books }: BookSliderProps) => {
  const swiperRef = useRef<SwiperType>();

  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<span id="bullet-${index}" class="${className} w-2.5 h-2.5 bg-gray-400 rounded-full mx-1 transition-all duration-300 swiper-pagination-bullet-custom hover:bg-[#937DC2]"></span>`;
    },
  };

  return (
    <div className={'px-24 relative mb-28 2xl:px-[250px]'}>
      <h3 className={'font-bold text-4xl mb-8'}>{title}</h3>
      <Swiper
        modules={[Navigation, Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={pagination}
        spaceBetween={80}
        slidesPerView={'auto'}
        navigation
        className={'pb-24'}
      >
        {books.map((book, i) => (
          <SwiperSlide style={{ maxWidth: '274px' }} key={i}>
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="absolute left-8 top-[40%] w-10 h-10"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <img src="/arrow-left.svg" alt="" className="w-full h-full" />
      </button>
      <button
        className="absolute right-8 top-[40%] w-10 h-10"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <img src="/arrow-right.svg" alt="" className="w-full h-full" />
      </button>
    </div>
  );
};

export default BookSlider;
