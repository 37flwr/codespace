import { type PropsWithChildren, type FC } from 'react';
import { DefaultButton } from '..';
import './styles.scss';

interface IRectangleButton extends PropsWithChildren {
  customClassName?: string;
  handleClick: any;
  id?: string;
}

const RectangleButton: FC<IRectangleButton> = ({ customClassName, handleClick, id, children }) => {
  return (
    <DefaultButton
      variant="filled"
      size="big"
      customClassName={customClassName}
      onClick={handleClick}
      id={id}
    >
      {children}
    </DefaultButton>
  );
};

export default RectangleButton;
