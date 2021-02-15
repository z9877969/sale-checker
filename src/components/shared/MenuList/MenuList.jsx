import React from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { closeList } from "../../../redux/topMenu/topMenuSlice";
import { openCard } from "../../../redux/cards/cardsSlice";

const MenuList = props => {
	const dispatch = useDispatch();
	const { renderData } = props;

	const handleActiveItem = id => {
		dispatch(openCard(id));
		dispatch(closeList());
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
