import { type FC, type PropsWithChildren } from 'react';
import { DefaultButton } from '..';

import './styles.scss';

interface ISquareButton extends PropsWithChildren {
  path?: string;
  customClassName?: string;
  onClick?: () => void;
  id?: string;
}

const SquareButton: FC<ISquareButton> = ({ children, path, customClassName, onClick, id }) => {
  if (path !== null && path !== undefined) {
    return (
      <DefaultButton
        path={path}
        size="small"
        variant="filled"
        id={id}
        customClassName={customClassName}
      >
        {children}
      </DefaultButton>
    );
  }

  return (
    <DefaultButton
      onClick={onClick}
      size="small"
      variant="filled"
      id={id}
      customClassName={customClassName}
    >
      {children}
    </DefaultButton>
  );
};

export default SquareButton;
