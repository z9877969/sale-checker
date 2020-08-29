import React from 'react';

const ButtonsCtrlDisplay = ({props}) => {
    const {type, action, buttonLabel} = props;
    return (
        <ul>
            <li>
                <button type={type} data-action={action}>
                    {buttonLabel}
                </button>
            </li>
        </ul>
    )
}