import { useState } from 'react';
import classNames from 'classnames';
import './styles.scss';

const DropdownSquareButton = ({ text, icon, customClassName, details }) => {
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