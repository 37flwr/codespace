import { type PropsWithChildren, useState, type FC } from 'react';
import classNames from 'classnames';
import { SquareButton } from '..';
import IconEditorsTop from '../../../assets/svg/EditorsTop';
import IconEditorsLeft from '../../../assets/svg/EditorsLeft';
import IconEditorsRight from '../../../assets/svg/EditorsRight';
import './styles.scss';

interface IDropdownSquareButton extends PropsWithChildren {
  content: string;
  customClassName?: string;
  customId: string;
}

const DropdownSquareButton: FC<IDropdownSquareButton> = ({
  content,
  customClassName,
  customId,
  children,
}) => {
  const [active, toggleActive] = useState(false);
  const handleClick = (): void => {
    toggleActive(true);
    console.log(active);
  };

  // Handle click outside of the button
  const button = document.getElementById(customId);
  window.onclick = function (event) {
    console.log();
    if (button?.contains(event.target as Node) === false) {
      toggleActive(false);
    }
  };

  const themeIcon = (theme: string): JSX.Element => {
    switch (theme) {
      case 'editors-top':
        return <IconEditorsTop />;
      case 'editors-left':
        return <IconEditorsLeft />;
      case 'editors-right':
        return <IconEditorsRight />;
      default:
        return <IconEditorsTop />;
    }
  };

  return (
    <div className="dropdown-square-button">
      <SquareButton onClick={handleClick} id={customId} customClassName={customClassName}>
        {themeIcon(content)}
      </SquareButton>
      <div className={classNames('button-details', active && 'active')}>{children}</div>
    </div>
  );
};

export default DropdownSquareButton;
