import { Droppable } from "react-beautiful-dnd";
import ToDoDrag from "./ToDoDrag";
import styled from "styled-components";

const ToDoWrapper = styled.div`
	min-height: 120px;
	border-radius: 5px;
	margin: 12px 10px;
	text-color: ${(props) => props.theme.textColor};
`;

const BoardWrapper = styled.div`
	background-color: ${(props) => props.theme.bgColor};
	border-radius: 6px;
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
			<ul>
				<Droppable droppableId={droppableId}>
					{(provided) => (
						<ToDoWrapper
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							{toDos.map((toDo, index) => (
								<ToDoDrag
									key={toDo}
									index={index}
									toDo={toDo}
								/>
							))}
							{provided.placeholder}
						</ToDoWrapper>
					)}
				</Droppable>
			</ul>
		</BoardWrapper>
	);
}

export default ToDoBoard;
