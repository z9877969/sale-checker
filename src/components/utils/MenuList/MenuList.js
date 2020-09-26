import React from 'react';
import Button from '../Button/Button';

const MenuList = props => {
    const {renderData, style} = props;
    
    return (
        <ul style={style}>
            {renderData.map(data =>
                {
                return (<li>
                    <Button props={data} />
                </li>)}
            )}
        </ul>
    )
}

export default MenuList;