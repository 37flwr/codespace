import { type PropsWithChildren } from 'react';

interface IButtonFactory extends PropsWithChildren {
  path?: string;
  onClick?: () => void;
  id?: string;
  variant?: 'filled' | 'bordered';
  customClassName?: string;
}

export default IButtonFactory;
