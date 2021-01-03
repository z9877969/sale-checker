import React from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { closeTopMenuList } from "../../../redux/topMenu/actionTopMenu";
import { openCard } from "../../../redux/cards/actionOpenCard";

const MenuList = props => {
	const dispatch = useDispatch();
	const { renderData } = props;

	const handleActiveItem = id => {
		dispatch(openCard(id));
		dispatch(closeTopMenuList());
	};

	return (
		<ul>
			{renderData.map(data => {
				return (
					<li key={"menuListItems" + data.actionId}>
						<Button {...data} cb={handleActiveItem} args={[data.actionId]} />
					</li>
				);
			})}
		</ul>
	);
};

export default MenuList;
