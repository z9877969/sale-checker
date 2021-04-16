import React from "react";
import { useSelector } from "react-redux";
import PageCardFood from "../../../pages/pageCardFood/PageCardFood";
import PageCardCustomer from "../../../pages/pageCardCustomer/PageCardCustomer";
import { getCardsSet, getCardsIds } from "../../../redux/cards/cardSelectors";
import "./CardsArea.module.scss";

const CardsArea = () => {
	// State
	const openedCardsIds = useSelector(getCardsIds);
	const openedCardsSet = useSelector(getCardsSet);

	// state
	// const [styles, setStyles] = useState({});

	return (
		<div>
			{openedCardsIds.includes("card-food") &&
				openedCardsSet.filter(card => card.id === "card-food")[0]?.["status"] !== "turn" && <PageCardFood />}
			{openedCardsIds.includes("card-customer") &&
				openedCardsSet.filter(card => card.id === "card-customer")[0]?.["status"] !== "turn" && <PageCardCustomer />}
		</div>
	);
};

export default CardsArea;
