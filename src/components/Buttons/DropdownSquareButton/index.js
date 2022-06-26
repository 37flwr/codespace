import { useState } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../../store/actions';
import './styles.scss';

const DropdownSquareButton = ({ text, icon, customClassName, details, clickHandler, children }) => {
    const [active, toggleActive] = useState(false) 
    const handleClick = () => {
        toggleActive(!active)
    }

    return (
        <div className='square-button-wrapper'>
            <button className={classNames('square-button', customClassName)} onClick={() => handleClick()}>
                {text || icon}
            </button>
            <div className={classNames('button-details', active && 'active')}>
                {children}
            </div>
        </div>
    )
}

export default DropdownSquareButton