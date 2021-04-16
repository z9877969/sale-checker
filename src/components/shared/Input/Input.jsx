import React, { useState } from "react";

const Input = props => {
	const { label, inputName, addToForm, type } = props;

	const [iValue, setIValue] = useState("");

	const handleInput = e => {
		const { name, value } = e.target;
		setIValue(value);
		addToForm(prev => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<label>
			{`${label}:`}
			<input type={type} name={inputName} value={iValue} onChange={handleInput} />
		</label>
	);
};

export default Input;
