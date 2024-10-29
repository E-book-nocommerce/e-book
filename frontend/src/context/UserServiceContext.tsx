// contexts/BookServiceContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { BookService } from '../libs/book/BookService.ts';
import { MockBookRepository } from '../libs/book/repository/MockBookRepository.ts';

const BookServiceContext = createContext<BookService | null>(null);

interface BookServiceProviderProps {
  children: ReactNode;
}

export const BookServiceProvider: React.FC<BookServiceProviderProps> = ({
  children,
}) => {
  const bookRepository = new MockBookRepository();
  const bookService = new BookService(bookRepository);

  return (
    <BookServiceContext.Provider value={bookService}>
      {children}
    </BookServiceContext.Provider>
  );
};

export const useBookService = (): BookService => {
  const context = useContext(BookServiceContext);
  if (!context) {
    throw new Error('useBookService must be used within a BookServiceProvider');
  }
  return context;
};
