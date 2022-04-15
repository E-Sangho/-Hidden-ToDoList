import { Droppable } from "react-beautiful-dnd";
import ToDoDrag from "./ToDoDrag";
import styled from "styled-components";
import { DraggableId } from "react-beautiful-dnd";

interface IToDoWrapper {
	isDraggingOver: boolean;
	draggingFromThisWith: boolean;
}

const ToDoWrapper = styled.div<IToDoWrapper>`
	border-radius: 5px;
	margin: 12px 10px;
	text-color: ${(props) => props.theme.textColor};
	background-color: ${(props) => {
		return props.isDraggingOver
			? "blue"
			: props.draggingFromThisWith
			? "pink"
			: "red";
	}};
	flex-grow: 1;
	transition: background-color 0.2s ease-in-out;
`;

const BoardWrapper = styled.div`
	background-color: ${(props) => props.theme.bgColor};
	border-radius: 6px;
	display: flex;
	flex-direction: column;
`;

const Title = styled.div`
	margin: 12px auto;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	color: ${(props) => props.theme.textColor};
`;

interface IToDoBoard {
	toDos: string[];
	droppableId: string;
}

function ToDoBoard({ toDos, droppableId }: IToDoBoard) {
	return (
		<BoardWrapper>
			<Title>{droppableId}</Title>
			<Droppable droppableId={droppableId}>
				{(provided, snapshot) => (
					<ToDoWrapper
						ref={provided.innerRef}
						{...provided.droppableProps}
						isDraggingOver={snapshot.isDraggingOver}
						draggingFromThisWith={Boolean(
							snapshot.draggingFromThisWith
						)}
					>
						{toDos.map((toDo, index) => (
							<ToDoDrag key={toDo} index={index} toDo={toDo} />
						))}
						{provided.placeholder}
					</ToDoWrapper>
				)}
			</Droppable>
		</BoardWrapper>
	);
}

export default ToDoBoard;
