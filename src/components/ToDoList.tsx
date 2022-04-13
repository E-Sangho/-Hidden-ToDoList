import { useRecoilState, useRecoilValue } from "recoil";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { toDoState, toDoSelector, categoryState, Category } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import ToDoDrag from "./ToDoDrag";

function ToDoList() {
	const [toDos, setToDos] = useRecoilState(toDoState);
	const [category, setCategory] = useRecoilState(categoryState);
	const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setCategory(event.currentTarget.value as any);
	};
	const onDragEnd = ({ destination, source }: DropResult) => {
		let newToDos = JSON.parse(JSON.stringify(toDos));
		let moved = newToDos.splice(source.index, 1);
		newToDos.splice(destination?.index, 0, ...moved);
		setToDos(newToDos);
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
			<DragDropContext onDragEnd={onDragEnd}>
				<ul>
					<Droppable droppableId="one">
						{(provided) => (
							<div
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								{toDos.map((toDo, index) => (
									<ToDoDrag
										key={toDo.text}
										index={index}
										toDo={toDo}
									/>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</ul>
			</DragDropContext>
		</div>
	);
}

export default ToDoList;
