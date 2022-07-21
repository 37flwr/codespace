import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import './styles.scss'

const DefaultButton = ({ text, icon, type, onClick, customClassName }) => {
  return (
    type === 'button' ?
        <button onClick={() => onClick()} className={classNames('default-button', customClassName)}>
            {icon}
            {text}
        </button>
    :
        <Link to={onClick} className={classNames('default-button', customClassName)}>
            {icon}
            {text}
        </Link>
  )
}

export default DefaultButton