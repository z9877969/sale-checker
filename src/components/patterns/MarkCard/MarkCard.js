import React from 'react';
import BtnsColection from '../BtnsColection/BtnsColection';

// styles
import scss from './MarkCard.module.scss';

// renderSets
import {btnsCtrlMarkCard} from '../../../utils/renderData/renderBtns.json';


const MarkCard = ({props}) => {
    const {title} = props;
    console.log('props :>> ', props);

    
    return (
        <article acttion-id={props.id} className={scss.label}>
            <h2 className={scss.title}>{title}</h2>
            <BtnsColection dataRender={btnsCtrlMarkCard} />
        </article>
    )
}

export default MarkCard;