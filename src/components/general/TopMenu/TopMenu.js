import React from "react";
import { useSelector, useDispatch } from "react-redux";

// imp components
import Button from "../../utils/Button/Button";
import MenuList from "../../utils/MenuList/MenuList";

// imp render data
import renderMenu from "../../../utils/renderData/renderTopMenu.json";

// imp redux set
import { openTopMenuList, closeTopMenuList } from "../../../redux/topMenu/actionTopMenu";
import { getTopMenuList } from "../../../redux/topMenu/topMenuSelector";

// imp styles
import scss from "./TopMenu.module.scss";

const { generalMenuBtns } = renderMenu;

const TopMenu = () => {
	const dispatch = useDispatch();

	// State
	const activeTopMenuList = useSelector(getTopMenuList);

	const handleToggleMenuList = id => {
		if (!activeTopMenuList) {
			dispatch(openTopMenuList(id));
		} else {
			dispatch(closeTopMenuList());
			dispatch(openTopMenuList(id));
		}
	};

	return (
		<header className={scss.topMenu}>
			<nav className={scss.nav}>
				<ul className={scss.list}>
					{generalMenuBtns.map(el => (
						<li className={scss.item} key={"topMenu" + el.actionId}>
							<Button {...el} cb={handleToggleMenuList} args={[el.actionId]} />
							{activeTopMenuList && el.actionId === activeTopMenuList && <MenuList renderData={el.cardsList} />}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default TopMenu;
