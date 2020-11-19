import React from 'react';
import Button from '../Button/Button';

const MenuList = props => {
    const {renderData} = props;
    
    return (
        <ul>
            {renderData.map(data =>
                {
                return (<li key={"menuListItems" + data.actionId}>
                    <Button props={data} />
                </li>)}
            )}
        </ul>
    )
}

export default MenuList;