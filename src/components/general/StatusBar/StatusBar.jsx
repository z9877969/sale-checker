import React from "react";
import { useSelector } from "react-redux";
import MarkCard from "../../template/MarkCard/MarkCard";
import { getTurnCards } from "../../../redux/cards/cardSelectors";
import scss from "./StatusBar.module.scss";

const StatusBar = () => {
	const marks = useSelector(getTurnCards);

	return (
		<footer className={scss.footer}>
			{marks.length > 0 && (
				<ul className={scss.list}>
					{marks.map(({ title, id }) => (
						<li>{<MarkCard props={{ title, id }} />}</li>
					))}
				</ul>
			)}
			<p>&copy; Produced by Apleuha</p>
		</footer>
	);
};

export default StatusBar;
