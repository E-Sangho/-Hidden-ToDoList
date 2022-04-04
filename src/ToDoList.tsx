import { useForm } from "react-hook-form";

interface IForm {
	toDo: string;
}

function ToDoList() {
	const { register, handleSubmit, setValue } = useForm<IForm>({
		defaultValues: {
			toDo: "Write a ToDo here",
		},
	});
	const onValid = (data: IForm) => {
		console.log(data.toDo);
		setValue("toDo", "");
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onValid)}>
				<input
					{...register("toDo", {
						required: "Please write a ToDo",
					})}
				/>
				<button>Add</button>
			</form>
		</div>
	);
}

export default ToDoList;
