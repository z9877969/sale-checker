import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/testSlice";

const TodoBtn = () => {
	const disatch = useDispatch();
	const handler = () => disatch(addTodo("321321"));

	return <button onClick={handler}>add todo</button>;
};

export default TodoBtn;
