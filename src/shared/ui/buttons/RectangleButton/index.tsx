import { type PropsWithChildren, type FC } from 'react';
import { DefaultButton } from '..';
import './styles.scss';

interface IRectangleButton extends PropsWithChildren {
  path?: string;
  customClassName?: string;
  onClick?: () => void;
  id?: string;
}

const RectangleButton: FC<IRectangleButton> = ({ customClassName, onClick, id, children }) => {
  return (
    <DefaultButton
      variant="filled"
      size="big"
      customClassName={customClassName}
      onClick={onClick}
      id={id}
    >
      {children}
    </DefaultButton>
  );
};

export default RectangleButton;
