import React from 'react';
import Title from '../Title/Title';
import BtnsCtrlHeader from '../BtnsCtrlHeader/BtnsCtrlHeader';
import scss from './ModalWindow.module.scss';

const ModalWindow = props => {

    const {title, id} = props;

    return (
        <section id={id} className={scss.window}>
            <div className={scss.header}>
                <Title title={title}/>    
                <BtnsCtrlHeader />
            </div>
            <div>
                {props.children}
            </div>
        </section>
    )
}

export default ModalWindow;