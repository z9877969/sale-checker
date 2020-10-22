import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// imp components
import Button from '../../utils/Button/Button';
import MenuList from '../../utils/MenuList/MenuList';

// imp styles
import scss from './TopMenu.module.scss';

// imp render data
import renderMenu from '../../../utils/renderData/renderTopMenu.json';

// imp actions
import {actionOpenTopMenu, actionCloseTopMenu} from '../../../redux/topMenu/actionTopMenu';
import {actionOpenCard} from '../../../redux/cards/actionOpenCard';

// imp helpers
import {getDispatchData} from '../../../utils/helpers/helpers';

const {generalMenuBtns} = renderMenu;    

const TopMenu = () => {
    const dispatch = useDispatch();
    
    // State
    const topMenuActiveItem = useSelector(state => state.activeStateEls.openTopMenu)
    .find(el => el.id && el.id.includes("MENU_"));
    console.log('topMenuActiveItem :>> ', topMenuActiveItem);
    
    // state
    const [idActiveMenuItem, setIdActiveMenuItem] = useState("");
    
    // handlers
    const handlerToogleListMenuActive = ({target}) => {        
        if(target.nodeName !== "BUTTON") return;
        
        const menuActive = target.closest("[data-action-id]");
        const menuActiveId = menuActive.dataset.actionId;
        setIdActiveMenuItem(menuActiveId);
    }
    
    // effects
    useEffect(() => {
        let payload = getDispatchData(idActiveMenuItem, "open");

        idActiveMenuItem.includes("MENU_") && dispatch(actionOpenTopMenu(payload));
        topMenuActiveItem && dispatch(actionCloseTopMenu(topMenuActiveItem.id));
        topMenuActiveItem && dispatch(actionOpenCard(payload));
    }, [idActiveMenuItem]);

    return (
        <header onClick={handlerToogleListMenuActive} className={scss.topMenu}>
            <nav className={scss.nav}>
                <ul className={scss.list}>
                    {generalMenuBtns.map(el => (
                        <li className={scss.item} key={"topMenu" + el.actionId}>
                            <Button props={el} />   
                            {topMenuActiveItem && el.actionId === topMenuActiveItem.id && <MenuList renderData={el.cardsList}/>}
                        </li>
                    )
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default TopMenu;