import { type FC } from 'react';
import { SquareButton } from '../../../shared/ui/buttons';

import { ReactComponent as IconLightTheme } from '../../../shared/assets/svg/LightTheme.svg';
import { ReactComponent as IconDarkTheme } from '../../../shared/assets/svg/DarkTheme.svg';

interface IChangeThemeButton {
  theme: 'light' | 'dark';
  onClick?: () => void;
}

const ChangeThemeButton: FC<IChangeThemeButton> = ({ theme, onClick }) => {
  return (
    <SquareButton onClick={onClick}>
      {theme === 'light' ? (
        <IconLightTheme width="85%" height="85%" />
      ) : (
        <IconDarkTheme width="75%" height="75%" />
      )}
    </SquareButton>
  );
};

export default ChangeThemeButton;
