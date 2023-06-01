import React from 'react';
import './button.css'

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className='myButton'>
            {children}
        </button>
    )
}

export default MyButton;