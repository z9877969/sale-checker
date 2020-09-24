import React from 'react';

// import components
import ModalWindow from '../../components/utils/ModalWindow/ModalWindow';
import FormInputData from '../../components/patterns/FormInputData/FormInputData';
import BtnsFinished from '../../components/patterns/BtnsColection/BtnsColection';
import Title from '../../components/utils/Title/Title';

// imp utils
import * as dataRender from '../../utils/renderData/renderCardUser.json';

// imp styles
import scss from './pageCardUser.module.scss';

const PageCardUser = () => {

    const {id, title} = dataRender.modalCardUser;
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

export default PageCardUser;