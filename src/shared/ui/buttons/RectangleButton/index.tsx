import { type FC } from 'react';
import cn from 'classnames';
import { DefaultButton } from '..';
import type IButtonFactory from '../../../interfaces/IButtonFactory.interface';

import './styles.scss';

const RectangleButton: FC<IButtonFactory> = ({ children, path, onClick, id, customClassName }) => {
  if (path !== null && path !== undefined) {
    return (
      <DefaultButton
        path={path}
        size="big"
        variant="filled"
        id={id}
        customClassName={cn('rectangle-button', customClassName)}
      >
        {children}
      </DefaultButton>
    );
  }

  return (
    <DefaultButton
      onClick={onClick}
      size="big"
      variant="filled"
      id={id}
      customClassName={cn('rectangle-button', customClassName)}
    >
      {children}
    </DefaultButton>
  );
};

export default RectangleButton;
