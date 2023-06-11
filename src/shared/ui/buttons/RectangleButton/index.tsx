import { type PropsWithChildren, type FC } from 'react';
import { DefaultButton } from '..';
import './styles.scss';

interface IRectangleButton extends PropsWithChildren {
  path?: string;
  customClassName?: string;
  onClick?: () => void;
  id?: string;
}

const RectangleButton: FC<IRectangleButton> = ({
  customClassName,
  path,
  onClick,
  id,
  children,
}) => {
  if (path !== null && path !== undefined) {
    return (
      <DefaultButton
        path={path}
        size="big"
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
      size="big"
      variant="filled"
      id={id}
      customClassName={customClassName}
    >
      {children}
    </DefaultButton>
  );
};

export default RectangleButton;
