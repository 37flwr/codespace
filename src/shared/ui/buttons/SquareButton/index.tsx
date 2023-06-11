import { type FC } from 'react';
import { DefaultButton } from '..';
import type IButtonFactory from '../../../interfaces/IButtonFactory.interface';

import './styles.scss';

const SquareButton: FC<IButtonFactory> = ({ children, path, customClassName, onClick, id }) => {
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
