
import React from 'react'

const Button = ({ className, children }) => {
  return (
    <button 
      className={`py-2 px-6 rounded-lg bg-[#DB4444] text-white  ${className}`}
    >
      {children}
    </button>
  )
}

export default Button;
