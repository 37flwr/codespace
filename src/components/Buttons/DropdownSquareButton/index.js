import { useState } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../../store/actions';
import './styles.scss';

const DropdownSquareButton = ({ text, icon, customClassName, details, clickHandler }) => {
    const [active, toggleActive] = useState(false) 
    const handleClick = () => {
        toggleActive(!active)
    }
    const dispatch = useDispatch()
    return (
        <div className='square-button-wrapper'>
            <button className={classNames('square-button', customClassName)} onClick={() => handleClick()}>
                {text || icon}
            </button>
            <div className={classNames('button-details', active && 'active')} onClick={() => dispatch(changeTheme(2))}>
                {details.map((item) => 
                    <div className='button-details-item'>
                        {item}
                    </div>
                )}
            </div>
        </div>
    )
}

export default DropdownSquareButton