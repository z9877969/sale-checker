import React from 'react';
import scss from "./BtnsCtrlHeader.module.scss";

const BtnsCtrlHeader = () => {
    
    return (
        <ul className={scss.btnsList}>
            <li>
                <button type="button" data-action="turn" className={`${scss.btn} ${scss.turn}`}></button>
            </li>
            <li>
                <button type="button" data-action="allSize" className={`${scss.btn} ${scss.allSize}`}></button>
            </li>
            <li>
                <button type="button" data-action="close" className={`${scss.btn} ${scss.close}`}></button>
            </li>
        </ul>
    )
}

export default BtnsCtrlHeader;