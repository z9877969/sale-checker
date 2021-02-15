import React, { useEffect } from "react";

// import components
import TopMenu from "../components/general/TopMenu/TopMenu";
import CardsArea from "../components/general/CardsArea/CardsArea";
import StatusBar from "../components/general/StatusBar/StatusBar";

// // import helpers
import "./App.module.scss";
import { app } from "./App.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getTopMenuList } from "../redux/topMenu/topMenuSelector";
import { closeList } from "../redux/topMenu/topMenuSlice";

const App = () => {
	const dispath = useDispatch();
	const isOpenTopMenu = !!useSelector(getTopMenuList);

	const onCloseTopMenu = () => isOpenTopMenu && dispath(closeList());

	return (
		// <Suspense>
		<div className={app} onClick={onCloseTopMenu}>
			<TopMenu />
			<CardsArea />
			<StatusBar />
		</div>
		// </Suspense>
	);
};

export default App;
