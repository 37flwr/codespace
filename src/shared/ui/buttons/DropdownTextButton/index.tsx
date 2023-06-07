import { type PropsWithChildren, useState, type FC } from 'react';
import classNames from 'classnames';
import RectangleButton from '../RectangleButton';

import './styles.scss';

interface IDropdownTextButton extends PropsWithChildren {
  content: string;
  customClassName?: string;
  customId: string;
}

const DropdownTextButton: FC<IDropdownTextButton> = ({ content, customId, children }) => {
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
      <RectangleButton handleClick={handleClick} id={customId}>
        {content}
      </RectangleButton>
      <div className={classNames('dropdown-text-btn__details', active && 'active')}>{children}</div>
    </div>
  );
};

export default DropdownTextButton;
