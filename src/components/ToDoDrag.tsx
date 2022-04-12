import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { IToDos } from "../atoms";

interface IToDoDrag {
	toDo: IToDos;
	index: number;
}
function ToDoDrag({ toDo, index }: IToDoDrag) {
	const onDragEnd = () => {};
	return (
		<Draggable key={toDo.text} draggableId={toDo.text} index={index}>
			{(provided) => (
				<li
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					{toDo.text}
				</li>
			)}
		</Draggable>
	);
}

export default ToDoDrag;
