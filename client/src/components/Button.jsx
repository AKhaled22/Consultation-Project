import React from 'react'

const Button = ({buttText , onClick}) => {
  return (
    <button className='rounded-pill blue-butt' onClick={onClick}>{buttText}</button>
  )
}

export default Button