import BookDetailSlider from '../molecules/BookDetailSlider.tsx';
import BookDetailCard from '../molecules/BookDetailCard.tsx';
import { Book } from '../../data-types.ts';

export interface BookDetailBlockProps extends React.HTMLProps<HTMLDivElement> {
  book: Book;
}

const BookDetailBlock: React.FunctionComponent<BookDetailBlockProps> = ({
  book,
}: BookDetailBlockProps) => {
  return (
    <div className={'flex px-24 justify-between mb-28 2xl:px-[250px]'}>
      <BookDetailSlider></BookDetailSlider>
      <BookDetailCard book={book}></BookDetailCard>
    </div>
  );
};

export default BookDetailBlock;
