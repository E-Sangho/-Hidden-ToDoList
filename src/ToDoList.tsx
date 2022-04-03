import React, { useState } from "react";

function ToDoList() {
	const [todo, setTodo] = useState("");
	const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		setTodo(event.target.value);
	};
	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(todo);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					value={todo}
					onChange={onChange}
					placeholder="Write a todo here"
				/>
				<button>Add Todo</button>
			</form>
		</div>
	);
}

export default ToDoList;
