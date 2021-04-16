import React, { useState } from "react";
import shortid from "shortid";
import Title from "components/shared/Title/Title";
import Input from "../../shared/Input/Input";
import {cardDataSubmit} from 'redux/cards/cardsSlice';

// import { postFoodsData } from '../../../utils/fetch/fetchForm';
import scss from "./FormInputData.module.scss";

const InputDataForm = props => {
	const { dataRender, title, cb } = props;

	// state
	const [data, setData] = useState({});

	// handlers
	const handleGetInputData = e => {
		const { name, value } = e.target;
		const obj = {};
		obj[name] = value;
		setData({ ...data, ...obj });
	};
	const handleFormSubmit = e => {
	    e.preventDefault();
	    const id = shortid.generate();
	    cb({id, ...data});
	}

	return (
		<>
			{title && <Title title={title} />}
			<form
				className={scss.foodsCard}
				onChange={handleGetInputData}
				onSubmit={handleFormSubmit}
			>
				<ul>
					{dataRender.map(({ label, inputName, type }) => (
						<li key={dataRender.length > 1 ? inputName : ""}>
							<Input
								{...{
									label,
									inputName,
									type,
									addToForm: setData
								}}
							/>
						</li>
					))}
				</ul>
			</form>
		</>
	);
};

export default InputDataForm;
