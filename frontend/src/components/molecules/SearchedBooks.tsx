export interface SearchedBooksProps extends React.HTMLProps<HTMLDivElement> {
  searchedCount: number;
}

const SearchedBooks: React.FC<SearchedBooksProps> = (props) => {
  return (
    <div
      className={
        'bg-white top-0 sticky z-20 flex justify-between items-center py-4 border-solid border-b-[1px] border-b-[#e9e9e9]'
      }
    >
      <p>Searched: {props.searchedCount}</p>
    </div>
  );
};

export default SearchedBooks;
