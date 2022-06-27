import { useState } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../../store/actions';
import IconEditorsTop from '../../../assets/EditorsTop.svg';
import IconEditorsLeft from '../../../assets/EditorsLeft.svg';
import IconEditorsRight from '../../../assets/EditorsRight.svg';
import './styles.scss';

const DropdownSquareButton = ({ content, customClassName, customId, details, clickHandler, children }) => {
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

      const themeIcon = (theme) => {
        if(theme === 'editors-top') {
        return <img src={IconEditorsTop} alt="" />
        } else if (theme === 'editors-left') {
        return <img src={IconEditorsLeft} alt="" />
        } else if (theme === 'editors-right') {
        return <img src={IconEditorsRight} alt="" />
        }
        return 'Theme'
    }

    console.log(content);

    return (
        <div className='square-button-wrapper'>
            <button className={classNames('square-button', customClassName)} onClick={() => handleClick()} id={customId}>
                {themeIcon(content)}
            </button>
            <div className={classNames('button-details', active && 'active')}>
                {children}
            </div>
        </div>
    )
}

export default DropdownSquareButton