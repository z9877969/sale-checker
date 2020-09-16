import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ModalWindow from '../../components/utils/ModalWindow/ModalWindow';
import BtnsFinished from '../../components/patterns/BtnsColection/BtnsColection';
import Title from '../../components/utils/Title/Title';
import FormInputData from '../../components/patterns/FormInputData/FormInputData';

import scss from './PageFoodCard.module.scss';
import * as dataRender from '../../utils/renderData/renderFoodCard.json';

const PageFoodCard = (props) => {
    

    
    return (
            <ModalWindow id={dataRender.modalFoodCard.id} title={dataRender.modalFoodCard.title}>
                <FormInputData dataRender={dataRender.formInputsDescrSets} btnsColSets={dataRender.setsLocalBtnsCard}/>
                <ul className={scss.advSetPanel}>
                    <li>
                        <Title title="Цена и наценка"/>
                        <FormInputData dataRender={dataRender.formSaleCtrlSets} btnsColSets={dataRender.setsLocalBtnsCard}/>
                    </li>    
                    <li>
                        <Title title="Единицы измерения"/>
                        <FormInputData dataRender={dataRender.formUnitsSets} btnsColSets={dataRender.setsLocalBtnsCard}/>
                    </li>   
                </ul>
                <div className={scss.bottomSideBar}>
                   <BtnsFinished dataRender={dataRender.setsGlobalBtnsCard}/>    
                </div>   
            </ModalWindow>
    )
}

export default PageFoodCard;