import React from 'react';
import Title from '../Title/Title';
import BtnsCtrlCardHeader from '../../template/BtnsCtrlCardHeader/BtnsCtrlCardHeader';
import scss from './ModalWindow.module.scss';

const ModalWindow = props => {
    const {title, id, actionId} = props;

    return (
        <section id={id} className={scss.window}>
            <div className={scss.header}>
                <Title title={title}/>    
                <BtnsCtrlCardHeader actionId={actionId}/>
            </div>
            <div>
                {props.children}
            </div>
        </section>
    )
}

export default ModalWindow;