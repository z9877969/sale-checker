import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../shared/Button/Button";
import MenuList from "../../shared/MenuList/MenuList";
import renderMenu from "../../../utils/renderData/renderTopMenu.json";
import { openList, closeList } from "../../../redux/topMenu/topMenuSlice";
import { getTopMenuList } from "../../../redux/topMenu/topMenuSelector";
import scss from "./TopMenu.module.scss";

const { generalMenuBtns } = renderMenu;

const TopMenu = () => {
	const dispatch = useDispatch();

	// State
	const activeTopMenuList = useSelector(getTopMenuList);

	const handleToggleMenuList = id => {
		if (!activeTopMenuList) {
			dispatch(openList(id));
		} else {
			dispatch(closeList());
			dispatch(openList(id));
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
