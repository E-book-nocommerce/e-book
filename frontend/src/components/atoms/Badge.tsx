export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children }: BadgeProps) => {
  return (
    <span
      className={
        'bg-transparent text-[#C689C6] border-solid border-[1px] border-[#C689C6] p-2.5 rounded'
      }
    >
      {children}
    </span>
  );
};

export default Badge;
