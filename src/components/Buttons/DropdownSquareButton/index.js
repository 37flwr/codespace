import { useState } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../../store/actions';
import './styles.scss';

const DropdownSquareButton = ({ text, icon, customClassName, customId, details, clickHandler, children }) => {
    const [active, toggleActive] = useState(false) 
    const handleClick = () => {
        toggleActive(!active)
    }

    // Handle click outside of the button
    const button = document.getElementById(customId);
    window.onclick = function(event) {
        if (event.target !== button) {
            toggleActive(false)
        }
    }

    return (
        <div className='square-button-wrapper'>
            <button className={classNames('square-button', customClassName)} onClick={() => handleClick()} id={customId}>
                {text || icon}
            </button>
            <div className={classNames('button-details', active && 'active')}>
                {children}
            </div>
        </div>
    )
}

export default DropdownSquareButton