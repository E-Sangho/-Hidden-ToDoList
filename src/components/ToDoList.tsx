import { useRecoilState } from "recoil";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { toDoState } from "../atoms";
import ToDoBoard from "./ToDoBoard";
import styled from "styled-components";
import AddToDo from "./AddToDo";

const Window = styled.div`
	background-color: ${(props) => props.theme.dominantColor};
	height: 100vh;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	margin: 20px auto;
	max-width: 720px;
`;

const Board = styled.div`
	display: grid;
	width: 100%;
	gap: 20px;
	grid-template-columns: repeat(3, 1fr);
	border-radius: 5px;
`;

function ToDoList() {
	const [toDos, setToDos] = useRecoilState(toDoState);
	const onDragEnd = ({ destination, draggableId, source }: DropResult) => {
		if (!destination) return;
		if (destination?.droppableId === source.droppableId) {
			setToDos((oldToDos) => {
				let copiedToDos = JSON.parse(
					JSON.stringify(oldToDos[source.droppableId])
				);
				let tempSave = copiedToDos[source.index];
				copiedToDos.splice(source.index, 1);
				copiedToDos.splice(destination.index, 0, tempSave);
				return {
					...oldToDos,
					[source.droppableId]: copiedToDos,
				};
			});
		}
		if (destination?.droppableId !== source.droppableId) {
			setToDos((oldToDos) => {
				let desCopy = JSON.parse(
					JSON.stringify(oldToDos[destination.droppableId])
				);
				let sourceCopy = JSON.parse(
					JSON.stringify(oldToDos[source.droppableId])
				);
				let tempSave = sourceCopy[source.index];
				sourceCopy.splice(source.index, 1);
				desCopy.splice(destination.index, 0, tempSave);
				return {
					...oldToDos,
					[destination.droppableId]: desCopy,
					[source.droppableId]: sourceCopy,
				};
			});
		}
	};
	return (
		<Window>
			<h1>ToDoList</h1>
			<AddToDo />
			<DragDropContext onDragEnd={onDragEnd}>
				<Wrapper>
					<Board>
						<ToDoBoard toDos={toDos["ToDo"]} droppableId={"ToDo"} />
						<ToDoBoard
							toDos={toDos["Doing"]}
							droppableId={"Doing"}
						/>
						<ToDoBoard toDos={toDos["Done"]} droppableId={"Done"} />
					</Board>
				</Wrapper>
			</DragDropContext>
		</Window>
	);
}

export default ToDoList;
