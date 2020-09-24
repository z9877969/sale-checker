import React from 'react';
import Button from '../../utils/Button/Button';
import * as renderBtns from '../../../utils/renderData/renderBtns.json';
import scss from "./BtnsCtrlCardHeader.module.scss";

const dataRender = renderBtns.btnsCtrlCardHeader;

const BtnsCtrlCardHeader = ({actionId}) => {
    return (
        <ul className={scss.btnsList}>
            {dataRender.map(data => {
               
                return (
                    <li>
                    <Button props={{...data, actionId}} />
                </li>   
                )
            })}
        </ul>
    )
}

export default BtnsCtrlCardHeader;