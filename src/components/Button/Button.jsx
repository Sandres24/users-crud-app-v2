import React from 'react';
import './Button.css';

function Button({ children, className, handleClick, disabled }) {
   return (
      <button
         className={`btn ${className}`}
         onClick={handleClick}
         disabled={disabled}
      >
         {children}
      </button>
   );
}

export default Button;
