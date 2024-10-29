import ContactBlock from '../organims/ContactBlock.tsx';
import BookSlider from '../organims/BookSlider.tsx';
import AuthorSlider from '../organims/AuthorSlider.tsx';
import Banner from '../organims/Banner.tsx';
import NavigationBar from '../organims/NavigationBar.tsx';
import { exampleAuthor, exampleBook } from '../../data.ts';
import { Book } from '../../data-types.ts';

const Index = () => {
  const books: Book[] = Array.from({ length: 12 }, () => ({
    ...exampleBook,
  }));
  return (
    <>
      <NavigationBar></NavigationBar>
      <AuthorSlider author={exampleAuthor}></AuthorSlider>
      <Banner></Banner>
      <BookSlider books={books} title={'Selected for you'} />
      <BookSlider books={books} title={'You must buy it now'} />
      <ContactBlock />
    </>
  );
};

export default Index;
