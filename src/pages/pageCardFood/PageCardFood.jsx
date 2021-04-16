import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalWindow from "components/shared/ModalWindow/ModalWindow";
import FormInputData from "components/template/FormInputData/FormInputData";
import BtnsColection from "components/template/BtnsColection/BtnsColection";
import Title from "components/shared/Title/Title";
import { getCardsIds } from "redux/cards/cardSelectors";
// import { addCardTitle } from "../../redux/cards/actionOpenCard";
import { addCardTitle, closeCard, cardDataSubmit } from "redux/cards/cardsSlice";

import scss from "./pageCardFood.module.scss";
import * as dataRender from "utils/renderData/renderCardFood.json";

const PageFoodCard = () => {
	const dispatch = useDispatch();
	const openedCards = useSelector(getCardsIds);

	const { cardName, title, forms } = dataRender.cardFood;
	const { description, saleParams, units, formBtns, cardBtns } = forms;

	const onSubmit = (data, apiEnd = "") => {
		console.log("data :>> ", data);
	};

	// const handleCancel = (cardName) => {
	// 	dispatch(closeCard(cardName));
	// }

	useEffect(() => {
		openedCards.includes(cardName) && dispatch(addCardTitle({ cardName, title }));
		// eslint-disable-next-line
	}, []);

	return (
		<ModalWindow id={cardName} title={title} actionId={cardName}>
			<FormInputData dataRender={[...description, ...saleParams, ...units]} cb={onSubmit} />
			{/* <ul className={scss.advSetPanel}>
				<li>
					<FormInputData title="Цена и наценка" dataRender={saleParams} />
				</li>
				<li>
					<FormInputData title="Единицы измерения" dataRender={units} />
				</li>
			</ul> */}
			<div className={scss.bottomSideBar}>
				<BtnsColection
					btnsSet={cardBtns}
					cardName={cardName}
					cbOpts={[
						{ name: "cancel", cb: closeCard },
						{ name: "ok", cb: cardDataSubmit },
					]}
				/>
			</div>
		</ModalWindow>
	);
};

export default PageFoodCard;
