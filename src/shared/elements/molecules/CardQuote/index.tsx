import { Card, Icon } from '@/elements/atoms';
import { Quote } from '@/interfaces';

type Props = {
  quote: Quote;
  selected?: boolean;
  onSelect: () => void;
};

export const CardQuote = ({ quote, selected, onSelect }: Props) => {
  return (
    <Card
      className={`h-full relative !px-6 !py-10 cursor-pointer text-default-neutral after:border-[3px] after:absolute after:inset-0 after:rounded-3xl ${selected ? 'after:border-neutrals-700' : 'after:border-transparent'}`}
      onClick={onSelect}
    >
      <span
        className={`absolute top-4 right-6 w-6 h-6 rounded-full flex items-center justify-center ${selected ? 'bg-feedback-success-300' : 'border border-neutrals-500'}`}
      >
        <Icon name="gl_check" className="w-[19.2px] h-[19.2px]" />
      </span>
      <div className="flex items-center gap-2 lg:flex-col lg:items-start">
        <Icon name={quote.icon} className="w-8 h-8 lg:w-12 lg:h-12" />
        <h4 className="text-headline-13 font-black">{quote.title}</h4>
      </div>
      <p className="mt-2 text-paragraph-07">{quote.description}</p>
    </Card>
  );
};
