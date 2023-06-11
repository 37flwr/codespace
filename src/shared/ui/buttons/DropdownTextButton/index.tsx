import { type PropsWithChildren, useState, type FC } from 'react';
import classNames from 'classnames';
import RectangleButton from '../RectangleButton';

import './styles.scss';
import {
  generateVariantClassName,
  generateSizeClassName,
} from '../../../lib/generateButtonClassNames';

interface IDropdownTextButton extends PropsWithChildren {
  content: string;
  customClassName?: string;
  customId: string;
  variant?: 'filled';
  size?: 'small' | 'big';
}

const DropdownTextButton: FC<IDropdownTextButton> = ({
  content,
  customId,
  variant,
  size = 'small',
  children,
}) => {
  const [active, toggleActive] = useState(false);
  const handleClick = (): void => {
    toggleActive(!active);
  };

  // Handle click outside of the button
  const button = document.getElementById(customId);
  window.onclick = function (event) {
    if (event.target !== button) {
      toggleActive(false);
    }
  };

  return (
    <div className="dropdown-text-btn_wrapper">
      <RectangleButton onClick={handleClick} id={customId}>
        {content}
      </RectangleButton>
      <div
        className={classNames(
          'dropdown-text-btn__details',
          generateVariantClassName(variant),
          generateSizeClassName(size),
          active && 'active',
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default DropdownTextButton;
