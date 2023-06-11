import { type FC } from 'react';
import cn from 'classnames';
import { DefaultButton } from '..';
import type IButtonFactory from '../../../interfaces/IButtonFactory.interface';

import './styles.scss';

const RectangleButton: FC<IButtonFactory> = ({
  children,
  path,
  onClick,
  id,
  variant,
  customClassName,
}) => {
  if (path !== null && path !== undefined) {
    return (
      <DefaultButton
        path={path}
        type="link"
        size="big"
        variant={variant}
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
      variant={variant}
      id={id}
      customClassName={cn('rectangle-button', customClassName)}
    >
      {children}
    </DefaultButton>
  );
};

export default RectangleButton;
