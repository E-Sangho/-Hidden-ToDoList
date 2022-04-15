import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const ToDo = styled.div`
	background-color: white;
	min-height: 30px;
	border-radius: 5px;
	padding: 0 12px;
	margin-bottom: 5px;
	display: flex;
	align-items: center;
`;

interface IToDoDrag {
	toDo: string;
	index: number;
}

function ToDoDrag({ toDo, index }: IToDoDrag) {
	return (
		<Draggable key={toDo} draggableId={toDo} index={index}>
			{(provided) => (
				<ToDo
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
