import { Author, Book, Category, Dimension, Publisher } from './data-types.ts';

export const exampleDimension: Dimension = {
  id: '1',
  length: 6,
  width: 1.8,
  height: 9,
};

export const examplePublisher: Publisher = {
  id: '1',
  name: 'Margaret K. Books',
};

export const exampleAuthor: Author = {
  id: '1',
  name: 'Eric-Emanuel Schmitt',
  description:
    'Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.',
};

export const exampleCategory: Category = {
  id: '1',
  title: 'Mystery',
};

export const exampleBook: Book = {
  url: 'chain-of-gold-the-last-hours',
  id: '1',
  title: 'Chain of Gold: The Last Hours #2',
  author: exampleAuthor,
  rating: 3.4,
  price: 12.48,
  description:
    'From #1 New York Times and USA TODAY bestselling author Cassandra Clare comes the first novel in a brand-new trilogy where evil hides in plain sight and love cuts deeper than any blade. Chain of Gold is a Shadowhunters novel.',
  publisher: examplePublisher,
  language: 'English',
  printLength: 592,
  publishDate: 'March 3, 2020',
  readingAge: 14,
  category: exampleCategory,
  dimension: exampleDimension,
};
