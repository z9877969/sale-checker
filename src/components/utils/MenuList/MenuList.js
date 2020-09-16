import React from 'react';

const MenuList = props => {
        const {renderData} = props;

    return (
        <ul>
            {renderData.map(data => <li>{data.title}</li>)}
        </ul>
    )
}

export default MenuList;