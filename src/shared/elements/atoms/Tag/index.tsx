type Props = {
  text: string;
};

export const Tag = ({ text }: Props) => {
  return (
    <div className="text-comp-12 font-bold py-[2px] px-2 rounded-[4px] w-fit bg-light-primary lg:py-1 lg:text-comp-14">
      {text}
    </div>
  );
};
