import classNames from 'classnames';
import { type PropsWithChildren, type FC } from 'react';
import './styles.scss';

interface IRectangleButton extends PropsWithChildren {
  customClassName?: string;
  handleClick: any;
  id?: string;
}

const RectangleButton: FC<IRectangleButton> = ({ customClassName, handleClick, id, children }) => {
  return (
    <button
      className={classNames('rectangle-button', customClassName)}
      onClick={handleClick}
      id={id}
    >
      {children}
    </button>
  );
};

export default RectangleButton;
