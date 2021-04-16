import React from "react";
import { useSelector } from "react-redux";
import BtnsColection from "../BtnsColection/BtnsColection";
import { closeCard, openCard } from "../../../redux/cards/cardsSlice";
import { getActiveCard } from "../../../redux/cards/cardSelectors";
import { btnsCtrlMarkCard } from "../../../utils/renderData/renderBtns.json";
import scss from "./MarkCard.module.scss";

const MarkCard = ({ props }) => {
	const { id } = props;
	const title = useSelector(state => getActiveCard(state, id)).title;
	
	return (
		<article data-action-id={id} className={scss.label}>
			<h2 className={scss.title}>{title}</h2>
			<BtnsColection
				btnsSet={btnsCtrlMarkCard}
				cardName={id}
				cbOpts={[
					{ cb: openCard, name: "turn" },
					{ cb: closeCard, name: "close" },
				]}
			/>
		</article>
	);
};

export default MarkCard;

MarkCard.defaultProps = {
	title: "Any Card",
};
