import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import useLocalStorage from 'use-local-storage'
import DropdownSquareButton from '../../Buttons/DropdownSquareButton';
import SquareButton from '../../Buttons/SquareButton';
import IconSettings from '../../../assets/Settings.svg';
import ThemeFormContainer from '../../Forms/ThemeForm/ThemeFormContainer';
import IconLightTheme from '../../../assets/LightTheme.svg';
import IconDarkTheme from '../../../assets/DarkTheme.svg';
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
            <img src={IconLightTheme} alt="" width='85%' />
          :
            <img src={IconDarkTheme} alt="" width="75%" />
          }
        </SquareButton>
        <SquareButton path='/settings'>
          <img src={IconSettings} alt="" width="50%" />
        </SquareButton>
      </div>
    </section>
  )
}

export default Header