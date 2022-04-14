import { useRecoilState } from "recoil";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { toDoState } from "../atoms";
import ToDoBoard from "./ToDoBoard";
import styled from "styled-components";

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
	const onDragEnd = ({ destination, source }: DropResult) => {
		console.log(toDos);
		if (destination?.droppableId === source.droppableId) {
			// do something
		}
	};
	return (
		<Window>
			<h1>ToDoList</h1>
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
