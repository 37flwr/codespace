import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropdownSquareButton from '../../Buttons/DropdownSquareButton';
import SquareButton from '../../Buttons/SquareButton';
import './styles.scss';

const Header = () => {
  // const dispatch = useDispatch()
  // const { layout } = useSelector((state) => state.Layout)
  // const memoizedLayout = useMemo(() => layout, [layout])

  // useEffect(() => dispatch())
  return (
    <section id='header'>
      <div id='header-logo' className='text-heading'>
        CodeBay
      </div>
      <div id='header-buttons'>
        <SquareButton>
          a
        </SquareButton>
        <DropdownSquareButton text='asd' details={['asd', 'asd']} />
        <button className='header-button'>
        </button>
        <button className='header-button'>
        </button>
      </div>
    </section>
  )
}

export default Header