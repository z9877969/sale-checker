import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalWindow from "../../components/shared/ModalWindow/ModalWindow";
import FormInputData from "../../components/template/FormInputData/FormInputData";
import BtnsFinished from "../../components/template/BtnsColection/BtnsColection";
import Title from "../../components/shared/Title/Title";
import { getCardsIds } from "../../redux/cards/cardSelectors";
// import { addCardTitle } from "../../redux/cards/actionOpenCard";
import { addCardTitle } from "../../redux/cards/cardsSlice";

import scss from "./pageCardFood.module.scss";
import * as dataRender from "../../utils/renderData/renderCardFood.json";

const PageFoodCard = () => {
	const dispatch = useDispatch();
	const openedCards = useSelector(getCardsIds);

	const { id, title, forms } = dataRender.cardFood;
	const {
		description,
		saleParams,
		units,
		formBtns,
		cardBtns,
	} = forms;

	useEffect(() => {
		openedCards.includes(id) && dispatch(addCardTitle({ id, title }));
		// eslint-disable-next-line
	}, []);

	return (
		<ModalWindow id={id} title={title} actionId={id}>
			<FormInputData dataRender={description} btnsColSets={formBtns} />
			<ul className={scss.advSetPanel}>
				<li>
					<Title title="Цена и наценка" />
					<FormInputData dataRender={saleParams} btnsColSets={formBtns} />
				</li>
				<li>
					<Title title="Единицы измерения" />
					<FormInputData dataRender={units} btnsColSets={formBtns} />
				</li>
			</ul>
			<div className={scss.bottomSideBar}>
				<BtnsFinished dataRender={cardBtns} />
			</div>
		</ModalWindow>
	);
};

export default PageFoodCard;
