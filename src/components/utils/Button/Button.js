import React from 'react';
import {getPropsAttribute} from '../../../utils/helpers/helpers';


const Button = ({props}) => {
    const {title, type, action, actionId} = props; 
    
    return (
       <button 
       type={type ? type : "button"} data-action={getPropsAttribute(action)}  data-action-id={getPropsAttribute(actionId)}
    >
        {getPropsAttribute(title)}
       </button>
    )
}

export default Button;

Button.defaultProps = {
    title: "",
    type: "",
    action: "",
    actionId: ""
}