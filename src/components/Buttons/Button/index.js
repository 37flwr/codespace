import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import './styles.scss'

const Button = ({ text, icon, type, onClick, style }) => {
  return (
    type === 'button' ?
        <button onClick={() => onClick()} className={classNames('button', style)}>
            <img src={icon} alt="" />
            {text}
        </button>
    :
        <Link to={onClick} className={classNames('button', style)}>
            <img src={icon} alt="" />
            {text}
        </Link>
  )
}

export default Button