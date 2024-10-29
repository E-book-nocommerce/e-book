import React, { useState } from 'react';
import Button from '../atoms/Button.tsx';
import StarRating from './RatingStars.tsx';
import { Book } from '../../data-types.ts';

export interface BookDetailProps extends React.HTMLProps<HTMLDivElement> {
  book: Book;
}

const BookDetailCard: React.FC<BookDetailProps> = ({
  book,
}: BookDetailProps) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="flex flex-col gap-4 max-w-[552px]">
      <h3 className={'text-main-text text-[28px] font-bold'}>{book.title}</h3>
      <p className={'text-[#4F4C57] text-lg'}>{book.author.name}</p>
      <StarRating rating={book.rating}></StarRating>
      <span className={'text-[#231F2D] text-2xl font-semibold my-5'}>
        ${book.price}
      </span>
      <p className="text-[#4F4C57] text-base">{book.description}</p>
      <div className="text-[#231F2D] flex items-center">
        <button
          className={
            'w-5 h-5 border-solid border-[1px] border-[#231F2D] flex justify-center items-center rounded-full'
          }
          type={'button'}
          onClick={decrementQuantity}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="2"
            viewBox="0 0 10 2"
            fill="none"
          >
            <path d="M9 1H1" stroke="#231F2D" stroke-linecap="round" />
          </svg>
        </button>
        <span className={'mx-2'}>{quantity}</span>
        <button
          className={
            'w-5 h-5 border-solid border-[1px] border-[#231F2D] flex justify-center items-center rounded-full'
          }
          type={'button'}
          onClick={incrementQuantity}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <path
              d="M5 1V5M5 5V9M5 5H9M5 5H1"
              stroke="#231F2D"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex gap-8">
        <Button type="button" className={'px-20 text-white'}>
          Add to cart
        </Button>
        <Button
          type="button"
          className={
            'px-24 bg-transparent border-solid border-purple border-[1px] text-purple'
          }
        >
          Favorite
        </Button>
      </div>
      <span className={'w-full h-[1px] bg-purple my-5'}></span>
      <div className="grid grid-cols-2 gap-5">
        <p>
          <span className={'text-purple'}>Publisher :</span>{' '}
          {book.publisher.name}
        </p>
        <p>
          <span className={'text-purple'}>Publication date :</span>{' '}
          {book.publishDate}
        </p>
        <p>
          <span className={'text-purple'}>Language :</span> {book.language}
        </p>
        <p>
          <span className={'text-purple'}>Reading age :</span> {book.readingAge}
          +
        </p>
        <p>
          <span className={'text-purple'}>Print length:</span>{' '}
          {book.printLength} pages
        </p>
        <p>
          <span className={'text-purple'}>Dimensions :</span>
          {book.dimension.height}
          {'x'}
          {book.dimension.width}
          {'x'}
          {book.dimension.height} inches
        </p>
      </div>
    </div>
  );
};

export default BookDetailCard;
