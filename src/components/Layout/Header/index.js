import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import ThemeFormContainer from '../../Forms/ThemeForm/ThemeFormContainer';
import DropdownSquareButton from '../../Buttons/DropdownSquareButton';
import SquareButton from '../../Buttons/SquareButton';

import { ReactComponent as IconSettings } from '../../../assets/Settings.svg';
import { ReactComponent as IconLightTheme } from '../../../assets/LightTheme.svg';
import { ReactComponent as IconDarkTheme } from '../../../assets/DarkTheme.svg';

import './styles.scss';

const Header = ({ themeHandler, currentTheme }) => {
  const { theme } = useSelector((state) => state.Theme)
  const memoizedTheme = useMemo(() => theme, [theme])
  
  return (
    <section id='header'>
      <div id='header-logo' className='text-heading'>
        CodeBay
      </div>
      <div id='header-buttons'>
        <DropdownSquareButton content={memoizedTheme} customId='theme-button' >
          <ThemeFormContainer currentTheme={memoizedTheme}/>
        </DropdownSquareButton>
        <SquareButton onClick={themeHandler}>
          {currentTheme === 'light' ?
            <IconLightTheme 
              width='85%'
              height='85%'
            />
          :
            <IconDarkTheme 
              width='75%'
              height='75%'
            />
          }
        </SquareButton>
        <SquareButton path='/settings'>
          <IconSettings 
            width='55%'
            height='55%'
          />
        </SquareButton>
      </div>
    </section>
  )
}

export default Header