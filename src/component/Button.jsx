import React from 'react'

const Button = ({label,onClick,labelClassName,buttonClassName,icons,...props}) => {
  return (
    <div>
      <button className={`  ${buttonClassName}`} onClick={onclick} {...props}>{label} </button>
    </div>
  )
}

export default Button
