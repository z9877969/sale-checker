import React from 'react';
import Title from '../Title/Title';
import BtnsCtrlHeader from '../BtnsCtrlHeader/BtnsCtrlHeader';
import FoodsCard from '../../entities-const/FoodsCard/FoodsCard';
import scss from './ModalWindow.module.scss';

const ModalWindow = ({props}) => {

    return (
        <section className={scss.window}>
            <div className={scss.header}>
                <Title title="Test Window"/>    
                <BtnsCtrlHeader />
            </div>
            <div>
                {/* main work space */}
                <FoodsCard />
            </div>
            <div>
                {/* header-ctrl-buttons */}
            </div>
        </section>
    )
}

export default ModalWindow;