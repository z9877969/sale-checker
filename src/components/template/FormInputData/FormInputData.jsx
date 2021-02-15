import React, { useState } from "react";
import shortid from "shortid";
import Input from "../../shared/Input/Input";
import BtnsColection from "../BtnsColection/BtnsColection";
// import { postFoodsData } from '../../../utils/fetch/fetchForm';
import scss from "./FormInputData.module.scss";

const InputDataForm = props => {
	const { dataRender, btnsColSets } = props;

	// state
	const [data, setData] = useState({});

	// handlers
	const handleGetInputData = e => {
		const { name, value } = e.target;
		const obj = {};
		obj[name] = value;
		setData({ ...data, ...obj });
	};
	// const handleFormSubmit = e => {
	//     e.preventDefault();
	//     const id = shortid.generate();
	//     postFoodsData({id, ...data});
	// }

	return (
		<form
			className={scss.foodsCard}
			onChange={handleGetInputData}
			// onSubmit={handleFormSubmit}
		>
			<ul>
				{dataRender.map(el => (
					<li key={dataRender.length > 1 ? shortid.generate() : ""}>
						<Input
							props={{
								label: el.label,
								inputName: el.nameIn,
								type: el.type ? el.type : "text",
							}}
						/>
					</li>
				))}
			</ul>
			<BtnsColection dataRender={btnsColSets} />
		</form>
	);
};

export default InputDataForm;
