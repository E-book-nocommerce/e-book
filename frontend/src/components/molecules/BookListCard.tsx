import { Book } from '../../data-types.ts';
import BookCard from './BookCard.tsx';

export interface BookListProps extends React.HTMLProps<HTMLDivElement> {
  books: Book[];
  className?: string;
}

const BookListCard = ({ books, className, ...rest }: BookListProps) => {
  return (
    <div className={`grid grid-cols-4 ${className}`} {...rest}>
      {books.map((book: Book) => (
        <BookCard
          className={
            'max-w-full border-solid border-[1px] border-t-0 border-l-0 border-[#e9e9e9] p-3 hover:shadow-2xl hover:scale-110 bg-white transition delay-70 easy-in-out'
          }
          book={book}
        />
      ))}
    </div>
  );
};

export default BookListCard;
