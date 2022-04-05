import { Category, IToDos, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

function ToDo({ text, id, category }: IToDos) {
	const setToDos = useSetRecoilState(toDoState);
	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const {
			currentTarget: { name },
		} = event;
		setToDos((toDos) => {
			const toDoIndex = toDos.findIndex((toDo) => toDo.id === id);
			let newToDos = toDos.slice();
			newToDos[toDoIndex] = {
				text: text,
				id: id,
				category: name as any,
			};
			return newToDos;
		});
	};
	return (
		<li>
			<span>{text}</span>
			{category !== Category.ToDo && (
				<button name={Category.ToDo} onClick={onClick}>
					ToDo
				</button>
			)}
			{category !== Category.Doing && (
				<button name={Category.Doing} onClick={onClick}>
					Doing
				</button>
			)}
			{category !== Category.Done && (
				<button name={Category.Done} onClick={onClick}>
					Done
				</button>
			)}
		</li>
	);
}

export default ToDo;
