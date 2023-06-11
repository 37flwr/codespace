import { type FC } from 'react';
import ChangeThemeButton from '../../../entities/buttons/ChangeThemeButton';
import { RectangleButton, SquareButton } from '../../../shared/ui/buttons';
import HeaderLogo from '../ui/HeaderLogo';

import { ReactComponent as IconExplore } from '../../../shared/assets/svg/Explore.svg';
import { ReactComponent as IconDiscord } from '../../../shared/assets/svg/Discord.svg';

import '../styles.scss';

const headerButtons = [
  {
    text: 'Explore',
    Icon: IconExplore,
    type: 'rectangle',
    path: '/explore',
    show: true,
  },
  {
    text: 'Discord',
    Icon: IconDiscord,
    type: 'square',
    path: '/',
    show: false,
  },
  {
    text: '</> Code',
    type: 'rectangle',
    path: '/editor',
    variant: 'filled',
    show: true,
  },
];

interface IHeader {
  themeHandler: () => void;
  currentTheme: 'light' | 'dark';
}

interface IHeaderButton {
  text: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  type: 'rectangle' | 'square';
  path: string;
  variant?: 'filled';
  show: boolean;
}

const renderButton = (btnParams: IHeaderButton, idx: string): JSX.Element => {
  const generateChildren = (
    text: string,
    RectIcon?: React.FC<React.SVGProps<SVGSVGElement>>,
  ): JSX.Element => {
    if (RectIcon !== null && RectIcon !== undefined) {
      return (
        <div className="default-button_gap_default">
          <RectIcon width="50%" />
          {text}
        </div>
      );
    } else {
      return <>{text}</>;
    }
  };

  const renderRectangleButton = (rectBtnParams: IHeaderButton, rectIdx: string): JSX.Element => {
    return (
      <RectangleButton key={rectIdx} {...rectBtnParams}>
        {generateChildren(rectBtnParams.text, rectBtnParams.Icon)}
      </RectangleButton>
    );
  };

  const renderSquareButton = (sqrBtnParams: IHeaderButton, sqrIdx: string): JSX.Element => {
    return (
      <SquareButton key={sqrIdx} {...sqrBtnParams}>
        {generateChildren(sqrBtnParams.text, sqrBtnParams.Icon)}
      </SquareButton>
    );
  };

  switch (btnParams.type) {
    case 'rectangle':
      return renderRectangleButton(btnParams, idx);
    case 'square':
      return renderSquareButton(btnParams, idx);
    default:
      return renderSquareButton(btnParams, idx);
  }
};

const BaseHeader: FC<IHeader> = ({ themeHandler, currentTheme }) => {
  return (
    <section id="header">
      <HeaderLogo />
      <div id="header-buttons">
        <ChangeThemeButton onClick={themeHandler} theme={currentTheme} />
        {headerButtons
          .filter(({ show }) => show)
          // @ts-expect-error btnProps should have type param either square or rectangle
          .map((btnProps, idx) => renderButton(btnProps, idx))}
      </div>
    </section>
  );
};

export default BaseHeader;
