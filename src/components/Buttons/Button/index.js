import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import './styles.scss'

const DefaultButton = ({ text, icon, type, onClick, style }) => {
  return (
    type === 'button' ?
        <button onClick={() => onClick()} className={classNames('button', style)}>
            {icon}
            {text}
        </button>
    :
        <Link to={onClick} className={classNames('button', style)}>
            {icon}
            {text}
        </Link>
  )
}

export default DefaultButton