import { type PropsWithChildren } from 'react';

interface IButtonFactory extends PropsWithChildren {
  path?: string;
  customClassName?: string;
  onClick?: () => void;
  id?: string;
}

export default IButtonFactory;
