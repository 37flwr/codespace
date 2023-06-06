import { useMemo, type FC } from 'react';
import { useSelector } from 'react-redux';
import { ThemeFormContainer } from '../../../widgets/forms';
import ChangeThemeButton from '../../../entities/buttons/ChangeThemeButton';
import type IHeader from '../../../shared/interfaces/IHeader.interface';
import { DropdownSquareButton, SquareButton } from '../../../shared/ui/buttons';
import HeaderLogo from '../ui/HeaderLogo';

import { ReactComponent as IconSettings } from '../../../shared/assets/svg/Settings.svg';

import '../styles.scss';

const EditorHeader: FC<IHeader> = ({ themeHandler, currentTheme }) => {
  const { theme } = useSelector((state: any) => state.Theme);
  const memoizedLayoutTheme = useMemo(() => theme, [theme]);

  return (
    <section id="header">
      <HeaderLogo />
      <div id="header-buttons">
        <ChangeThemeButton onClick={themeHandler} theme={currentTheme} />
        <DropdownSquareButton content={memoizedLayoutTheme} customId="theme-button">
          <ThemeFormContainer currentTheme={memoizedLayoutTheme} />
        </DropdownSquareButton>
        <SquareButton path="/settings">
          <IconSettings width="55%" height="55%" />
        </SquareButton>
      </div>
    </section>
  );
};

export default EditorHeader;
