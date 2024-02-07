import { Icon } from '../Icon';

type Props = {
  onClick: () => void;
};

export const ButtonBack = ({ onClick }: Props) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={onClick}>
      <div className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-blue-berry-600">
        <Icon
          name="gl_left"
          className="w-[10px] h-[10px] ic-inherit fill-blue-berry-600"
        />
      </div>
      <span className="text-button-03 font-bold text-blue-berry-600">
        Volver
      </span>
    </div>
  );
};
