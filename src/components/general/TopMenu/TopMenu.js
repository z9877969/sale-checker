import React from 'react';
import Button from '../../utils/Button/Button';
import MenuList from '../../utils/MenuList/MenuList';

import renderMenu from '../../../utils/renderData/renderMenu.json';

import scss from './TopMenu.module.scss';

const TopMenu = () => {

    return (
        <header className={scss.topMenu}>
            <nav className={scss.nav}>
                <ul className={scss.list}>
                    {renderMenu.parrentBtns.map(el => (
                        <li className={scss.item}>
                            <Button props={el} />
                            <MenuList  renderData={el.cardsList}/>
                        </li>
                        )
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default TopMenu;