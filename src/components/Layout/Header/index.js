import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ThemeFormContainer from '../../Forms/ThemeForm/ThemeFormContainer';
import DropdownSquareButton from '../../Buttons/DropdownSquareButton';
import SquareButton from '../../Buttons/SquareButton';
import {  ReactComponent as CodespaceLogo } from '../../../assets/CodespaceLogo.svg'
import { ReactComponent as IconSettings } from '../../../assets/Settings.svg';
import { ReactComponent as IconLightTheme } from '../../../assets/LightTheme.svg';
import { ReactComponent as IconDarkTheme } from '../../../assets/DarkTheme.svg';

import './styles.scss';

const Header = ({ themeHandler, currentTheme }) => {
  const { theme } = useSelector((state) => state.Theme)
  const memoizedTheme = useMemo(() => theme, [theme])
  
  return (
    <section id='header'>
      <div className='header-logo-container text-heading'>
        <CodespaceLogo className="header-logo" />
        <span className="header-logo-text">
          Codespace
        </span>
      </div>
      <div id='header-buttons'>
        {window.location.pathname === '/editor' ?
          <>
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
          </>
        :
          <div>

          </div>
        }
      </div>
    </section>
  )
}

export default Header