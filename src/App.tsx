import ToDoList from "./components/ToDoList";
import GlobalStyle from "./components/GlobalStyle";
import styled from "styled-components";

function App() {
	return (
		<div>
			<GlobalStyle />
			<ToDoList />
		</div>
	);
}

export default App;
