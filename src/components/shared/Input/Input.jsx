import React from 'react';

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