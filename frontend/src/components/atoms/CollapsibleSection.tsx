import React, { useRef } from 'react';
import Button from './Button.tsx';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const toggleContent = () => {
    if (contentRef.current) {
      contentRef.current.classList.toggle('max-h-0');
      contentRef.current.classList.toggle('max-h-500');
    }
    if (imgRef.current) {
      imgRef.current.classList.toggle('rotate-180');
    }
  };

  return (
    <div>
      <Button
        type={'button'}
        className={'w-full bg-transparent p-2 py-2 cursor-pointer'}
        onClick={toggleContent}
      >
        <div className={'flex justify-between items-center'}>
          <h3 className={'text-purple'}>{title}</h3>
          <img
            ref={imgRef}
            src="/drop-down.svg"
            alt="Toggle"
            className={`transition-transform duration-300`}
          />
        </div>
      </Button>
      <div ref={contentRef} className="max-h-0 overflow-hidden transition-all">
        {children}
      </div>
    </div>
  );
};

export default CollapsibleSection;
