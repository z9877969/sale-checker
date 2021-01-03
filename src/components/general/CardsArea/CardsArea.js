import React from "react";
import { useSelector } from "react-redux";

// import actions
import { getCardsSet, getCardsIds } from "../../../redux/cards/cardSelectors";

// import components
import PageCardFood from "../../../pages/pageCardFood/pageCardFood";
import PageCardCustomer from "../../../pages/pageCardCustomer/pageCardCustomer";

// import helpers
import "./CardsArea.module.scss";

// helpers

const CardsArea = () => {
	
	// State
	const openedCardsIds = useSelector(getCardsIds);
	const openedCardsSet = useSelector(getCardsSet);

	// state
	// const [styles, setStyles] = useState({}); 

	return (
		<div>
			{openedCardsIds.includes("card-food") && openedCardsSet.filter(card => card.id === "card-food")[0]?.["status"] !== "turn" && <PageCardFood />}
			{openedCardsIds.includes("card-customer") && openedCardsSet.filter(card => card.id === "card-customer")[0]?.["status"] !== "turn" && <PageCardCustomer />}
		</div>
	);
};

export default CardsArea;
