import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 6px 0px;
	border-radius: 5px;
	background-color: white;
	min-height: 30px;
	padding: 0 12px;
`;

const ToDo = styled.div`
	width: 100%;
`;

interface IToDoDrag {
	toDo: string;
	index: number;
}

function ToDoDrag({ toDo, index }: IToDoDrag) {
	return (
		<Wrapper>
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
		</Wrapper>
	);
}

export default React.memo(ToDoDrag);
