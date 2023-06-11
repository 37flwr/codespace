import { type FC, type PropsWithChildren } from 'react';
import { DefaultButton } from '..';

import './styles.scss';

interface ISquareButton extends PropsWithChildren {
  path?: string;
  customClassName?: string;
  onClick?: () => void;
  id?: string;
}

const SquareButton: FC<ISquareButton> = ({ children, path, customClassName, onClick }) => {
  if (path !== null && path !== undefined) {
    return (
      <DefaultButton customClassName={customClassName} path={path} size="small" variant="filled">
        {children}
      </DefaultButton>
    );
  }

  return (
    <DefaultButton
      customClassName={customClassName}
      onClick={onClick}
      size="small"
      variant="filled"
    >
      {children}
    </DefaultButton>
  );
};

export default SquareButton;
