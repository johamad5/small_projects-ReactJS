import React from 'react';
import '../stylesheet/button.css'

function Button({ text, btnClick, handleClick }) {
    return(
        <button className={btnClick ? 'btnClick' : 'btnReset' } onClick={handleClick}>
            {text}
        </button>
    )
}

export default Button;