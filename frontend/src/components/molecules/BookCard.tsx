import Button from '../atoms/Button.tsx';
import { Book } from '../../data-types.ts';
import { Link } from 'react-router-dom';

export interface BookCardProps extends React.HTMLProps<HTMLDivElement> {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({
  book,
  className = '',
}: BookCardProps) => {
  return (
    <div className={`max-w-full flex-col ${className}`}>
      <figure className="mr-auto ml-auto w-full max-h-[414px] mb-6 flex justify-center">
        <img src="/book-img.jpg" alt="" className="" />
      </figure>
      <div className="pb-[10px]">
        <Link to={`/books/${book.url}`}>
          <h3 className="text-xl font-bold mb-1">{book.title}</h3>
        </Link>
        <Link to={`/books/`} className="">
          <p className="text-base mb-3.5">{book.author.name}</p>
        </Link>
        <div className="flex justify-between">
          <h4 className="font-bold  text-[24px]">${book.price}</h4>
            <img src="/Heart.svg" alt="" className="h-full w-1/6"/>
        </div>
      </div>
      <Button type="button" className={'w-full text-white'}>
        <div className={'flex justify-center items-center gap-2'}>
          <img src="/cartWhite.svg" alt="" className="" />
          Add to cart
        </div>
      </Button>
    </div>
  );
};

export default BookCard;
