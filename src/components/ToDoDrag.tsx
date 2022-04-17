import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const ToDo = styled.div<{ isDragging: boolean }>`
	background-color: ${(props) => (props.isDragging ? "#18A3EA" : "white")};
	min-height: 30px;
	border-radius: 5px;
	padding: 0 12px;
	margin-bottom: 5px;
	display: flex;
	align-items: center;
	box-shadow: ${(props) =>
		props.isDragging ? "3px 3px 5px rgba(0, 0, 0, 0.3)" : "none"};
`;

interface IToDoDrag {
	toDo: string;
	index: number;
}

function ToDoDrag({ toDo, index }: IToDoDrag) {
	return (
		<Draggable key={toDo} draggableId={toDo} index={index}>
			{(provided, snapshot) => (
				<ToDo
					isDragging={snapshot.isDragging}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					{toDo}
				</ToDo>
			)}
		</Draggable>
	);
}

export default React.memo(ToDoDrag);
