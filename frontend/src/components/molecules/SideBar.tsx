import React from 'react';
import Checkbox from '../atoms/Checkbox';
import { Author, Category } from '../../data-types';
import CollapsibleSection from '../atoms/CollapsibleSection.tsx';
import RangePriceInput from '../atoms/RangePriceInput.tsx';

interface SidebarProps {
  authors: Author[];
  categories: Category[];
  selectedCategories: Category[];
  selectedAuthors: Author[];
  onFilterChange: (filterKey: string, value: string) => void;
  className?: string;
  onSubmit: (value1: number, value2: number) => void;
}

const SideBar: React.FC<SidebarProps> = ({
  categories,
  authors,
  selectedAuthors,
  selectedCategories,
  onFilterChange,
  className,
  onSubmit,
}) => {
  return (
    <div className={`${className} h-fit px-2 sticky top-[57px] z-10`}>
      <CollapsibleSection title={'Categories'}>
        {categories.map((category) => (
          <Checkbox
            key={category.id + category.title}
            id={category.id + category.title}
            label={category.title}
            value={category.id}
            checked={selectedCategories.includes(category) || false}
            onChange={(value) => onFilterChange('category', value)}
            className={'p-2 flex items-center'}
          />
        ))}
      </CollapsibleSection>
      <CollapsibleSection title={'Authors'}>
        {authors.map((author) => (
          <Checkbox
            id={author.id + author.name}
            key={author.id + author.name}
            label={author.name}
            value={author.id}
            checked={selectedAuthors.includes(author) || false}
            onChange={(value) => onFilterChange('author', value)}
            className={'p-2 flex items-center'}
          />
        ))}
      </CollapsibleSection>
      <CollapsibleSection title={'Price'}>
        <RangePriceInput onSubmit={onSubmit} />
      </CollapsibleSection>
    </div>
  );
};

export default SideBar;
