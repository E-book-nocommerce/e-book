// components/BookDetail.tsx
import BookDetailBlock from '../organims/BookDetailBlock.tsx';
import ContactBlock from '../organims/ContactBlock.tsx';
import NavigationBar from '../organims/NavigationBar.tsx';
import BreadCrumbs from '../organims/BreadCrumbs.tsx';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Book } from '../../data-types.ts';
import {useBookService} from "../../context/UserServiceContext.tsx";

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const bookService = useBookService();

  const [book, setBook] = useState<Book | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBook = async () => {
      if (!id) return; // If no id is found, return early
      try {
        const fetchedBook = await bookService.getBookById(id);
        setBook(fetchedBook);
      } catch (error) {
        console.error('Failed to fetch book:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [bookService, id]);

  if (loading) return <p>Loading book details...</p>;
  if (!book) return <p>Book not found.</p>;

  return (
    <>
      <NavigationBar />
      <BreadCrumbs customLastUrl={book.title} />
      <BookDetailBlock book={book} />
      <ContactBlock />
    </>
  );
};

export default BookDetail;
