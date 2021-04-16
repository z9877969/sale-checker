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

	const { btnsSet, cbOpts, cardName } = props;

	const withCbOpts = cbOpts.length
		? btnsSet.map(({ name, ...rest }) => ({
				action: name,
				cb: cbOpts.find(el => el.name === name)["cb"],
				...rest,
		  }))
		: btnsSet;

	const onClick = (cardName, cb) => {
		dispatch(cb(cardName));
	};

	return (
		<ul style={styles.list}>
			{withCbOpts.map(data => (
				<li key={shortid.generate()}>
					<Button {...data} cbProp={onClick} args={[cardName, data.cb]} />
				</li>
			))}
		</ul>
	);
};

export default BtnsColection;

BtnsColection.defaultProps = {
	cbArr: [],
	cardName: "",
};
