import { type PropsWithChildren, type FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './styles.scss';
import {
  generateVariantClassName,
  generateSizeClassName,
} from '../../../lib/generateButtonClassNames';

interface IDefaultButton extends PropsWithChildren {
  text?: string;
  variant?: 'filled';
  size?: 'small' | 'big';
  icon?: JSX.Element;
  type?: string;
  onClick?: () => void;
  path?: string;
  customClassName?: string;
  id?: string;
}

const DefaultButton: FC<IDefaultButton> = ({
  text,
  icon,
  type,
  id,
  variant,
  onClick = () => {},
  path = '/',
  size = 'small',
  customClassName,
  children,
}: IDefaultButton) => {
  const renderButtonValue = (): JSX.Element => {
    if (children !== null) {
      return <>{children}</>;
    } else {
      return (
        <>
          {icon}
          {text}
        </>
      );
    }
  };

  switch (type) {
    case 'link':
      return (
        <Link
          to={path}
          className={classNames(
            'default-button',
            generateVariantClassName(variant),
            generateSizeClassName(size),
            customClassName,
          )}
          id={id}
        >
          {renderButtonValue()}
        </Link>
      );
    default:
      return (
        <button
          onClick={onClick}
          className={classNames(
            'default-button',
            generateVariantClassName(variant),
            generateSizeClassName(size),
            customClassName,
          )}
          id={id}
        >
          {renderButtonValue()}
        </button>
      );
  }
};

export default DefaultButton;
