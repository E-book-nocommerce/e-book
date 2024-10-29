import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Author, Book, Category } from '../../data-types';
import BreadCrumbs from '../organims/BreadCrumbs.tsx';
import BookListBlock from '../organims/BookListBlock.tsx';
import ContactBlock from '../organims/ContactBlock.tsx';
import { useBookService } from '../../context/UserServiceContext.tsx';

const authors: Author[] = [
  { id: '1', name: 'J.K. Rowling', description: '', url: '' },
  { id: '2', name: 'George R.R. Martin', description: '', url: '' },
  { id: '3', name: 'J.R.R. Tolkien', description: '', url: '' },
];

const categories: Category[] = [
  { id: '1', title: 'Fantasy' },
  { id: '2', title: 'Science Fiction' },
  { id: '3', title: 'Mystery' },
];

const BookList: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookService = useBookService();

  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const fetchedBooks = await bookService.getBooks();
        setBooks(fetchedBooks);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [bookService]);

  const queryParams = new URLSearchParams(location.search);
  const selectedCategories: Category[] = categories.filter((category) =>
    queryParams.getAll('category').includes(category.id),
  );
  const selectedAuthors: Author[] = authors.filter((author) =>
    queryParams.getAll('author').includes(author.id),
  );
  const minPrice = parseInt(queryParams.get('minPrice') || '0', 10);
  const maxPrice = parseInt(queryParams.get('maxPrice') || '1000', 10);

  const handleFilterChange = (filterKey: string, value: string) => {
    const queryParams = new URLSearchParams(location.search);
    const values = queryParams.getAll(filterKey);
    const valueIndex = values.indexOf(value);

    if (valueIndex !== -1) {
      values.splice(valueIndex, 1);
      queryParams.delete(filterKey);
      values.forEach((val) => queryParams.append(filterKey, val));
    } else {
      queryParams.append(filterKey, value);
    }
    navigate(`?${queryParams.toString()}`);
  };

  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((category) => book.category.id === category.id);

    const matchesAuthor =
      selectedAuthors.length === 0 ||
      selectedAuthors.some((author) => book.author.id === author.id);

    const matchesPrice = book.price >= minPrice && book.price <= maxPrice;

    return matchesCategory && matchesAuthor && matchesPrice;
  });

  if (loading) return <p>Loading books...</p>;

  const handleRangeSubmit = (minPrice: number, maxPrice: number) => {
    const queryParams = new URLSearchParams(location.search);

    queryParams.set('minPrice', minPrice.toString());
    queryParams.set('maxPrice', maxPrice.toString());

    navigate(`?${queryParams.toString()}`);
  };

  return (
    <>
      <BreadCrumbs />
      <BookListBlock
        books={filteredBooks}
        categories={categories}
        authors={authors}
        selectedCategories={selectedCategories}
        selectedAuthors={selectedAuthors}
        onFilterChange={handleFilterChange}
        onSubmit={handleRangeSubmit}
      />
      <ContactBlock />
    </>
  );
};

export default BookList;
