type Props = {
  className?: string;
};

export const Divider = ({ className }: Props) => {
  return (
    <span className={`h-[1px] w-full block bg-grey-30 ${className}`}></span>
  );
};
