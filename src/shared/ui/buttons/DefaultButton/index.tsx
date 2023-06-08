import { type FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './styles.scss';

interface IDefaultButton {
  text: string;
  variant?: string;
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
  const generateVariantClassName = (): string => {
    switch (variant) {
      case 'filled':
        return 'filled';
      default:
        return '';
    }
  };

  console.log(generateVariantClassName());
  switch (type) {
    case 'button':
      return (
        <button
          onClick={onClick}
          className={classNames('default-button', generateVariantClassName(), customClassName)}
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
