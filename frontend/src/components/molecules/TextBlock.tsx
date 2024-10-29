export interface TextBlockProps extends React.HTMLProps<HTMLDivElement> {
  heading: string;
  paragraphs: string[];
  className?: string;
}

const TextBlock = ({
  heading,
  paragraphs,
  className = '',
  ...rest
}: TextBlockProps) => {
  return (
    <div className={className} {...rest}>
      <h3 className={`text-4xl font-bold mb-4 text-[#382C2C]`}>{heading}</h3>
      {paragraphs.map((paragraph) => (
        <p className="mb-4">{paragraph}</p>
      ))}
    </div>
  );
};

export default TextBlock;
