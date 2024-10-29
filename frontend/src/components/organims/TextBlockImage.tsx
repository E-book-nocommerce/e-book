import TextBlock from '../molecules/TextBlock.tsx';

export interface TextBlockImageProps extends React.HTMLProps<HTMLDivElement> {
  heading: string;
  paragraphs: string[];
  image: string;
}

const TextBlockImage = ({
  heading,
  paragraphs,
  image,
  className = '',
  ...rest
}: TextBlockImageProps) => {
  return (
    <div className={`flex mb-24 gap-10 items-start ${className}`} {...rest}>
      <TextBlock
        className={'max-w-[70%]'}
        heading={heading}
        paragraphs={paragraphs}
      />
      <figure className={'max-w-1/4 w-1/4 h-full overflow-hidden'}>
        <img src={image} alt="" className="w-full h-full object-cover" />
      </figure>
    </div>
  );
};

export default TextBlockImage;
