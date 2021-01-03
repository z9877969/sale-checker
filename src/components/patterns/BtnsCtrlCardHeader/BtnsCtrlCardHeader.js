import React from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import Button from "../../utils/Button/Button";
import * as renderBtns from "../../../utils/renderData/renderBtns.json";
import { closeCard, turnCard } from "../../../redux/cards/actionOpenCard";
import scss from "./BtnsCtrlCardHeader.module.scss";

const dataRender = renderBtns.btnsCtrlCardHeader;

const BtnsCtrlCardHeader = ({ actionId }) => {
	const dispatch = useDispatch();

	const handleCardStatus = btnAction => {
		switch (btnAction) {
			case "close":
				return dispatch(closeCard(actionId));
			case "turn":
				return dispatch(turnCard(actionId));
			default:
				return;
		}
	};

	return (
		<ul className={scss.btnsList}>
			{dataRender.map(data => {
				return (
					<li key={shortid.generate()}>
						<Button {...data} cb={handleCardStatus} args={[data.action]} />
					</li>
				);
			})}
		</ul>
	);
};

export default BtnsCtrlCardHeader;
