import { Author, Book, Category } from '../../data-types.ts';
import SearchedBooks from '../molecules/SearchedBooks.tsx';
import SideBar from '../molecules/SideBar.tsx';
import BookListCard from '../molecules/BookListCard.tsx';

export interface BookListBlockProps {
  books: Book[];
  categories: Category[];
  authors: Author[];
  selectedAuthors: Author[];
  selectedCategories: Category[];
  onFilterChange: (filterKey: string, value: string) => void;
    onSubmit: (value1: number, value2: number) => void;
}

const BookListBlock = (props: BookListBlockProps) => {
  return (
    <div className={'px-24 pb-24 2xl:px-[250px]'}>
      <SearchedBooks searchedCount={props.books.length} />
      <div className="flex">
        <SideBar
          className={'w-[250px] border-solid border-r-[1px] border-[#e9e9e9]'}
          categories={props.categories}
          authors={props.authors}
          selectedCategories={props.selectedCategories}
          selectedAuthors={props.selectedAuthors}
          onFilterChange={props.onFilterChange}
          onSubmit={props.onSubmit}
        />
        <BookListCard books={props.books} className={'w-[calc(100%-250px)]'} />
      </div>
    </div>
  );
};

export default BookListBlock;
