import React from "react";
import { getPropsAttribute } from "../../../utils/helpers/helpers";

const Button = props => {
	
	const { title, type, action, cb, args } = props;

    const handleClick = () => cb(...args)

	return (
		<button
			onClick={handleClick}
			type={type}
			data-action={getPropsAttribute(action)}
		>
			{getPropsAttribute(title)}
		</button>
	);
};

export default Button;

Button.defaultProps = {
	title: "",
	type: "button",
	action: "", // type of action of button
	actionId: "", // id of card what use button
};
