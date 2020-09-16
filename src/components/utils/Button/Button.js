import React from 'react';

const Button = (props) => {
    const {title, type, action} = props;

    return (
    <button type={type} data-action={action}>{title}</button>
    )
}

export default Button;