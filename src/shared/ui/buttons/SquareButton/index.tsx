import classNames from 'classnames';
import { type FC, type PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

interface ISquareButton extends PropsWithChildren {
  path?: string;
  customClassName?: string;
  onClick?: () => void;
}

const SquareButton: FC<ISquareButton> = ({ children, path, customClassName, onClick }) => {
  if (path !== null && path !== undefined) {
    return (
      <Link to={path} className={classNames('square-button', customClassName)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classNames('square-button', customClassName)}
      onClick={() => {
        onClick?.();
      }}
    >
      {children}
    </button>
  );
};

export default SquareButton;
