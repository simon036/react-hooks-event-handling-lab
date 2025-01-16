// Code Keypad Component Here
import React from 'react';

function Keypad (){
    const handleInput = (event) => {
        console.log('Entering password...', event.target.value)
    }
    return (
        <div>
            <input type="password" onChange={handleInput} />
        </div>
        
    )
}

export default Keypad;