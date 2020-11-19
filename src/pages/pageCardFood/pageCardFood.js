import React from 'react';
import ModalWindow from '../../components/utils/ModalWindow/ModalWindow';
import FormInputData from '../../components/patterns/FormInputData/FormInputData';
import BtnsFinished from '../../components/patterns/BtnsColection/BtnsColection';
import Title from '../../components/utils/Title/Title';

import scss from './pageCardFood.module.scss';
import * as dataRender from '../../utils/renderData/renderCardFood.json';

const PageFoodCard = () => {
        
    const {id, title} = dataRender.modalFoodCard;
    const {formInputsDescrSets, formSaleCtrlSets, formUnitsSets, setsLocalBtnsCard, setsGlobalBtnsCard} = dataRender.default;

    return (
            <ModalWindow id={id} title={title} actionId={id}>
                <FormInputData dataRender={formInputsDescrSets} btnsColSets={setsLocalBtnsCard}/>
                <ul className={scss.advSetPanel}>
                    <li>
                        <Title title="Цена и наценка"/>
                        <FormInputData dataRender={formSaleCtrlSets} btnsColSets={setsLocalBtnsCard}/>
                    </li>    
                    <li>
                        <Title title="Единицы измерения"/>
                        <FormInputData dataRender={formUnitsSets} btnsColSets={setsLocalBtnsCard}/>
                    </li>   
                </ul>
                <div className={scss.bottomSideBar}>
                   <BtnsFinished dataRender={setsGlobalBtnsCard}/>    
                </div>   
            </ModalWindow>
    )
}

export default PageFoodCard;