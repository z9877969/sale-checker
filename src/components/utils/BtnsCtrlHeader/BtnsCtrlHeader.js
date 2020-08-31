import React from 'react';
import scss from "./BtnsCtrlHeader.module.scss";

const BtnsCtrlHeader = () => {
    
    return (
        <ul className={scss.btnsList}>
            <li>
                <button type="button" className={`${scss.btn} ${scss.turn}`}></button>
            </li>
            <li>
                <button type="button" className={`${scss.btn} ${scss.allSize}`}></button>
            </li>
            <li>
                <button type="button" className={`${scss.btn} ${scss.close}`}></button>
            </li>
        </ul>
    )
}

export default BtnsCtrlHeader;