import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropdownSquareButton from '../../Buttons/DropdownSquareButton';
import SquareButton from '../../Buttons/SquareButton';
import { changeTheme } from '../../../store/actions';
import './styles.scss';

const Header = () => {

  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.Theme)
  const memoizedLayout = useMemo(() => theme, [theme])
  console.log(memoizedLayout);

  // useEffect(() => 
  //   dispatch(changeTheme()), [dispatch])
  const details = ['asd', 'asd']
  
  return (
    <section id='header'>
      <div id='header-logo' className='text-heading'>
        CodeBay
      </div>
      <div id='header-buttons'>
        <SquareButton>
          a
        </SquareButton>
        <DropdownSquareButton text='asd' details={details} />
        <button className='header-button'>
        </button>
        <button className='header-button'>
        </button>
      </div>
    </section>
  )
}

export default Header