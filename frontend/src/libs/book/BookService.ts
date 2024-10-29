import { BaseBookRepository } from './repository/BaseBookRepository.ts';
import { Book } from '../../data-types.ts';

export class BookService {
  private bookRepository: BaseBookRepository;

  constructor(bookRepository: BaseBookRepository) {
    this.bookRepository = bookRepository;
  }

  async getBooks() {
    return await this.bookRepository.fetchBooks();
  }

  async getBookById(id: string) {
    return await this.bookRepository.fetchBookById(id);
  }

  async createBook(data: Book) {
    return await this.bookRepository.createBook(data);
  }
}
