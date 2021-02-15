import React from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import Button from "../../shared/Button/Button";

const styles = {
	list: {
		display: "flex",
	},
};

const BtnsColection = props => {
	const dispatch = useDispatch();
	const { dataRender, cbArr, cardId } = props;
	const dataUpdated = cbArr.length ? dataRender.map((data, idx) => ({ ...data, cb: cbArr[idx] })) : dataRender;

	const handleCardStatus = (cardId, cb) => {
		dispatch(cb(cardId));
	};

	return (
		<ul style={styles.list}>
			{dataUpdated.map(data => (
				<li key={shortid.generate()}>
					<Button {...data} cb={handleCardStatus} args={[cardId, data.cb]} />
				</li>
			))}
		</ul>
	);
};

export default BtnsColection;

BtnsColection.defaultProps = {
	cbArr: [],
	cardId: "",
};
