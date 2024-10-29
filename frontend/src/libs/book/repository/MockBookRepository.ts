import { v4 as uuidv4 } from 'uuid';
import { Book } from '../../../data-types.ts';
import { BaseBookRepository } from './BaseBookRepository.ts';
import { exampleBook } from '../../../data.ts';

export class MockBookRepository implements BaseBookRepository {
  private books: Book[] = [exampleBook];

  async fetchBooks(): Promise<Book[]> {
    return [...this.books];
  }

  async sliderBooks(): Promise<Book[]> {
    return [...this.books];
  }

  async fetchBookById(id: string): Promise<Book | undefined> {
    return this.books.find((book) => book.url === id);
  }

  async createBook(book: Omit<Book, 'id'>): Promise<Book> {
    const newBook: Book = { ...book, id: uuidv4() };
    this.books.push(newBook);
    return newBook;
  }

  async deleteBook(id: string): Promise<boolean> {
    const index = this.books.findIndex((book) => book.id === id);
    if (index === -1) return false;
    this.books.splice(index, 1);
    return true;
  }
}
