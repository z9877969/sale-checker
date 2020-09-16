import React, {useState} from 'react';

// label
// name
// value



const Input = ({props}) => {

    const {label, inputName, inputValue, type} = props;

    return (
        <label>
            {`${label}:`}
            <input type={type} name={inputName} value={inputValue}/>
        </label>
    )
    
}

export default Input;