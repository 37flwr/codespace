import { type FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './styles.scss';
import generateVariantClassName from '../../../lib/generateButtonVariantClassName';

interface IDefaultButton {
  text: string;
  variant?: 'filled';
  icon?: JSX.Element | undefined;
  type?: string;
  onClick?: () => void;
  path?: string;
  customClassName?: string;
}

const DefaultButton: FC<IDefaultButton> = ({
  text,
  icon,
  type,
  variant,
  onClick = () => {},
  path = '/',
  customClassName,
}: IDefaultButton) => {
  switch (type) {
    case 'button':
      return (
        <button
          onClick={onClick}
          className={classNames(
            'default-button',
            generateVariantClassName(variant),
            customClassName,
          )}
        >
          <>
            {icon}
            {text}
          </>
        </button>
      );
    default:
      return (
        <Link
          to={path}
          className={classNames('default-button', generateVariantClassName(), customClassName)}
        >
          <>
            {icon}
            {text}
          </>
        </Link>
      );
  }
};

export default DefaultButton;
