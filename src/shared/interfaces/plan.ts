import { IconNames } from '@/elements/atoms';

export interface Plan {
  name: string;
  price: number;
  description: string[];
  age: number;
  icon: IconNames;
  isRecommended: boolean;
}
