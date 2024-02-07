import Telephone from './Icons/gl_telephone.svg';
import ArrowDown from './Icons/gl_arrow_down.svg';
import AddUser from './Icons/ic_add_user.svg';
import Check from './Icons/gl_check.svg';
import ArrowLeft from './Icons/gl_arrow_left.svg';
import Protection from './Icons/ic_protection.svg';
import Home from './Icons/ic_home.svg';
import Hospital from './Icons/ic_hospital.svg';
import Left from './Icons/gl_left.svg';
import Right from './Icons/gl_right.svg';
import Loading from './Icons/ic_loading.svg';
import Family from './Icons/gl_family.svg';

export const iconTypes = {
  gl_telephone: {
    component: Telephone,
    alt: 'Telephone',
  },
  gl_arrow_down: {
    component: ArrowDown,
    alt: 'Arrow Down',
  },
  gl_check: {
    component: Check,
    alt: 'Check',
  },
  gl_arrow_left: {
    component: ArrowLeft,
    alt: 'Arrow Left',
  },
  ic_protection: {
    component: Protection,
    alt: 'Protection',
  },
  ic_add_user: {
    component: AddUser,
    alt: 'Add User',
  },
  ic_home: {
    component: Home,
    alt: 'Home',
  },
  ic_hospital: {
    component: Hospital,
    alt: 'Hospital',
  },
  gl_left: {
    component: Left,
    alt: 'Left',
  },
  gl_right: {
    component: Right,
    alt: 'Right',
  },
  ic_loading: {
    component: Loading,
    alt: 'Loading',
  },
  gl_family: {
    component: Family,
    alt: 'Family',
  },
};

export type IconNames = keyof typeof iconTypes;

type Props = {
  name: IconNames;
  className?: string;
  onClick?: () => void;
};

export const Icon: React.FC<Props> = ({ name, ...props }) => {
  const IconAux = iconTypes[name] ? iconTypes[name] : iconTypes.gl_telephone;
  return <IconAux.component {...props} alt={IconAux?.alt} />;
};
