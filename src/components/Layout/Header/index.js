import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import DropdownSquareButton from '../../Buttons/DropdownSquareButton';
import SquareButton from '../../Buttons/SquareButton';
import IconSettings from '../../../assets/Settings.svg';
import ThemeFormContainer from '../../Forms/ThemeForm/ThemeFormContainer';
import './styles.scss';

const Header = () => {
  const { theme } = useSelector((state) => state.Theme)
  const memoizedTheme = useMemo(() => theme, [theme])
  console.log(memoizedTheme);
  
  return (
    <section id='header'>
      <div id='header-logo' className='text-heading'>
        CodeBay
      </div>
      <div id='header-buttons'>
        <DropdownSquareButton content={memoizedTheme} customId='theme-button' >
          <ThemeFormContainer currentTheme={memoizedTheme}/>
        </DropdownSquareButton>
        <SquareButton>
          <img src={IconSettings} alt="" />
        </SquareButton>
      </div>
    </section>
  )
}

export default Header