import { type FC } from 'react';
import ChangeThemeButton from '../../../entities/buttons/ChangeThemeButton';
import { DefaultButton } from '../../../shared/ui/buttons';
import HeaderLogo from '../ui/HeaderLogo';

import { ReactComponent as IconExplore } from '../../../shared/assets/svg/Explore.svg';
import { ReactComponent as IconDiscord } from '../../../shared/assets/svg/Discord.svg';

import '../styles.scss';

const headerButtons = [
  {
    text: 'Explore',
    Icon: IconExplore,
    path: '/',
    show: true,
  },
  {
    text: 'Discord',
    Icon: IconDiscord,
    path: '/',
    show: false,
  },
  {
    text: '</> Code',
    path: '/editor',
    customClassName: 'filled',
    show: true,
  },
];

interface IHeader {
  themeHandler: () => void;
  currentTheme: 'light' | 'dark';
}

const BaseHeader: FC<IHeader> = ({ themeHandler, currentTheme }) => {
  return (
    <section id="header">
      <HeaderLogo />
      <div id="header-buttons">
        {window.location.pathname === '/editor' ? (
          <></>
        ) : (
          <>
            <ChangeThemeButton onClick={themeHandler} theme={currentTheme} />
            {headerButtons
              .filter(({ show }) => show)
              .map(({ Icon, ...buttonProps }, idx) => {
                if (Icon !== null && Icon !== undefined) {
                  return <DefaultButton key={idx} icon={<Icon />} {...buttonProps} />;
                } else {
                  return <DefaultButton key={idx} {...buttonProps} />;
                }
              })}
          </>
        )}
      </div>
    </section>
  );
};

export default BaseHeader;
