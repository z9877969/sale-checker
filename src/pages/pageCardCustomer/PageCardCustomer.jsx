import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// import components
import ModalWindow from "../../components/shared/ModalWindow/ModalWindow";
import FormInputData from "../../components/template/FormInputData/FormInputData";
import BtnsFinished from "../../components/template/BtnsColection/BtnsColection";
import Title from "../../components/shared/Title/Title";

// imp utils
import * as dataRender from "../../utils/renderData/renderCardCustomer.json";

import { getCardsIds } from "../../redux/cards/cardSelectors";
// import { addCardTitle } from "../../redux/cards/actionOpenCard";
import { addCardTitle } from "../../redux/cards/cardsSlice";

// imp styles
import scss from "./pageCardCustomer.module.scss";

const PageCardCustomer = () => {
	const dispatch = useDispatch();

	const openedCards = useSelector(getCardsIds);

	const { id, title } = dataRender.modalCardCustomer;
	const {
		formInputsDescrSets,
		formSaleCtrlSets,
		formUnitsSets,
		setsLocalBtnsCard,
		setsGlobalBtnsCard,
	} = dataRender.default;

	useEffect(() => {
		openedCards.includes(id) && dispatch(addCardTitle({ id, title }));
		// eslint-disable-next-line
	}, []);

	return (
		<ModalWindow id={id} title={title} actionId={id}>
			<FormInputData dataRender={formInputsDescrSets} btnsColSets={setsLocalBtnsCard} />
			<ul className={scss.advSetPanel}>
				<li>
					<Title title="Цена и наценка" />
					<FormInputData dataRender={formSaleCtrlSets} btnsColSets={setsLocalBtnsCard} />
				</li>
				<li>
					<Title title="Единицы измерения" />
					<FormInputData dataRender={formUnitsSets} btnsColSets={setsLocalBtnsCard} />
				</li>
			</ul>
			<div className={scss.bottomSideBar}>
				<BtnsFinished dataRender={setsGlobalBtnsCard} />
			</div>
		</ModalWindow>
	);
};

export default PageCardCustomer;
