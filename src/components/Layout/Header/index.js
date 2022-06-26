import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropdownSquareButton from '../../Buttons/DropdownSquareButton';
import SquareButton from '../../Buttons/SquareButton';
import { changeTheme } from '../../../store/actions';
import './styles.scss';
import ThemeFormContainer from '../../Forms/ThemeForm/ThemeFormContainer';

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
        <SquareButton>
          a
        </SquareButton>
        <DropdownSquareButton text='asd'>
          <ThemeFormContainer currentTheme={memoizedTheme}/>
        </DropdownSquareButton>
      </div>
    </section>
  )
}

export default Header