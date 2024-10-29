import { Book } from '../../../data-types.ts';

export interface BaseBookRepository {
  fetchBooks(): Promise<Book[]>;
  fetchBookById(id: string): Promise<Book | undefined>;
  createBook(book: Book): Promise<Book>;
  deleteBook(id: string): Promise<boolean>;
  sliderBooks(): Promise<Book[]>;
}
