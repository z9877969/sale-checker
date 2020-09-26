import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Button from '../../utils/Button/Button';
import MenuList from '../../utils/MenuList/MenuList';

import renderMenu from '../../../utils/renderData/renderTopMenu.json';

import scss from './TopMenu.module.scss';
import { isCardUserOpenReducer } from '../../../redux/cards/cardUser/reducerCardUser';
import {actionIsTopMenuListOpen} from '../../../redux/topMenu/actionTopMenu';

const {parrentBtns} = renderMenu;    
const style = {
    hidden: {
        display: "none",
    },
    visible: {
        display: "block",
    }
}
const defaultStyle = style.hidden;
const activeStyle = style.visible;

const TopMenu = (props) => {
    const dispatch = useDispatch();

    // State
    const topMenuItemActive = useSelector(state => state.isOpen.menu)

    // state
    const [idActiveMenuItem, setIdActiveMenuItem] = useState("");

    // handlers
    const handlerToogleListMenuActive = e => {
        const menuActive = e.target.closest("[data-action-id]");
        const menuActiveId = menuActive.dataset.actionId;
        setIdActiveMenuItem(menuActiveId);
    }

    useEffect(() => {
        console.log('idActiveMenuItem_eff :>> ', idActiveMenuItem,'isTopMenuItemActive_eff :>> ', topMenuItemActive );
        idActiveMenuItem && dispatch(actionIsTopMenuListOpen({
            id: idActiveMenuItem,
            isOpen: true,
        }));

    }, [idActiveMenuItem])


    return (
        <header onClick={handlerToogleListMenuActive} className={scss.topMenu}>
            <nav className={scss.nav}>
                <ul className={scss.list}>
                    {parrentBtns.map(el => {console.log('el :>> ', el);
                        return (
                        <li className={scss.item}>
                            <Button props={el} />
                            <MenuList style={el.actionId === topMenuItemActive.id ? activeStyle : defaultStyle } renderData={el.cardsList}/>
                        </li>
                        )}
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default TopMenu;