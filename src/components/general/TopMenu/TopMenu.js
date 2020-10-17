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
import {actionOpenEl, actionCloseEl} from '../../../redux/activeStateElements/actionActiveStateElements';

// imp helpers
import {getDispatchData} from '../../../utils/helpers/helpers';

const {generalMenuBtns} = renderMenu;    

const TopMenu = () => {
    const dispatch = useDispatch();
    
    // State
    const topMenuActiveItem = useSelector(state => state.activeStateEls)
    console.log('topMenuActiveItem :>> ', topMenuActiveItem);
    // .find(el => el.id && el.id.includes("MENU_"));
    
    // state
    const [idActiveMenuItem, setIdActiveMenuItem] = useState("");
    
    // handlers
    const handlerToogleListMenuActive = ({target}) => {        
        if(target.nodeName === "BUTTON"){
            const menuActive = target.closest("[data-action-id]");
            const menuActiveId = menuActive.dataset.actionId;
            
            // setIdActiveMenuItem(menuActiveId);
        }
    }
    
    // effects
    console.log("topmenu");
    // useEffect(() => {
    //     if(idActiveMenuItem) {
    //         const payload = getDispatchData(idActiveMenuItem, "open");
    //         dispatch(actionOpenEl(payload));
    //     }
    //     // topMenuActiveItem && dispatch(actionCloseEl(topMenuActiveItem.id));
    // }, [idActiveMenuItem]);

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