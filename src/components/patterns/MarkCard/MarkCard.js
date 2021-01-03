import React from "react";
import { useSelector } from "react-redux";
import BtnsColection from "../BtnsColection/BtnsColection";

// actions
import { closeCard, openCard } from "../../../redux/cards/actionOpenCard";
import { getActiveCard } from "../../../redux/cards/cardSelectors";
// styles
import scss from "./MarkCard.module.scss";
// renderSets
import { btnsCtrlMarkCard } from "../../../utils/renderData/renderBtns.json";

const MarkCard = ({ props }) => {
	const { id } = props;
	const title = useSelector(state => getActiveCard(state, id)).title;
	console.log("title :>> ", title);

	return (
		<article data-action-id={id} className={scss.label}>
			<h2 className={scss.title}>{title}</h2>
			<BtnsColection dataRender={btnsCtrlMarkCard} cardId={id} cbArr={[openCard, closeCard]} />
		</article>
	);
};

export default MarkCard;

MarkCard.defaultProps = {
	title: "Any Card",
};
