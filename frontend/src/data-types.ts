export interface Book {
  url: string;
  id: string;
  title: string;
  author: Author;
  rating: number;
  price: number;
  description: string;
  publisher: Publisher;
  language: string;
  printLength: number;
  publishDate: string;
  readingAge: number;
  dimension: Dimension;
  category: Category;
}

export interface Author {
  url: string;
  id: string;
  name: string;
  description: string;
}

export interface Publisher {
  url: string;
  id: string;
  name: string;
}

export interface Dimension {
  id: string;
  length: number;
  width: number;
  height: number;
}

export interface Category {
  id: string;
  title: string;
}
