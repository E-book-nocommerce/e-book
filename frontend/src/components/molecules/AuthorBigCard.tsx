import Badge from '../atoms/Badge.tsx';
import { Author } from '../../data-types.ts';

export interface AuthorBigCardProps extends React.HTMLProps<HTMLDivElement> {
  author: Author;
}

const AuthorBigCard: React.FC<AuthorBigCardProps> = ({
  author,
}: AuthorBigCardProps) => {
  return (
    <div className="flex gap-16 justify-between max-w-[1460px]">
      <div className={'flex flex-col justify-center items-start max-w-[50%]'}>
        <Badge>Author of august</Badge>
        <h2 className={'text-5xl font-bold text-[#382C2C] my-8'}>
          {author.name}
        </h2>
        <p className={'max-w-[477px] text-[#4D4C4C] text-base'}>
          {author.description}
        </p>
        <a
          href={'/'}
          className={'py-3 text-white px-8 bg-[#937DC2] rounded mt-10'}
        >
          View his books
        </a>
      </div>
      <div className={'flex w-[50%] gap-3.5'}>
        <span
          className={
            'max-w-40 text-xl:w uppercase tracking-widest text-[#201F1F] opacity-80'
          }
        >
          Autographed books + 30% discount
        </span>
        <div className={'text-end'}>
          <figure className={'h-[410px] w-[280px] overflow-hidden'}>
            <img src="/book-img.jpg" alt="" className="" />
          </figure>
          <span className={'mt-1'}>*within the stock limit</span>
        </div>
      </div>
    </div>
  );
};

export default AuthorBigCard;
