import { useRecoilState, useRecoilValue } from "recoil";
import { toDoSelector, categoryState, Category } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
	const toDos = useRecoilValue(toDoSelector);
	const [category, setCategory] = useRecoilState(categoryState);
	const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setCategory(event.currentTarget.value as any);
	};
	return (
		<div>
			<h1>ToDoList</h1>
			<hr />
			<select value={category} onChange={onChange}>
				<option value={Category.ToDo}>ToDo</option>
				<option value={Category.Doing}>Doing</option>
				<option value={Category.Done}>Done</option>
			</select>
			<CreateToDo />
			<hr />
			<ul>
				{toDos.map((toDo) => (
					<ToDo key={toDo.id} {...toDo} />
				))}
			</ul>
		</div>
	);
}

export default ToDoList;
