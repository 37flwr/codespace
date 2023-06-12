import { type FC } from 'react';
import { SquareButton } from '../../../shared/ui/buttons';

import IconLightTheme from '../../../shared/assets/svg/LightTheme';
import IconDarkTheme from '../../../shared/assets/svg/DarkTheme';

interface IChangeThemeButton {
  theme: 'light' | 'dark';
  onClick?: () => void;
}

const ChangeThemeButton: FC<IChangeThemeButton> = ({ theme, onClick }) => {
  return (
    <SquareButton onClick={onClick}>
      {theme === 'light' ? <IconLightTheme /> : <IconDarkTheme />}
    </SquareButton>
  );
};

export default ChangeThemeButton;
