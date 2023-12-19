import React from "react";
import '../stylesheet/counter.css'

function Counter({ number }) {
    return(
        <div className='counter'>{ number }</div>
    )
}

export default Counter;