import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ResetCSS from "./components/resetcss";
import GlobalStyle from "./components/globalstyle";
import Container from "./components/container";
import ToDoHead from "./components/head";
import ToDoList from "./components/todolist";
import ListContainer from "./components/listcontainer";
import CreateToDo from "./components/createtodo";
const AddBtn = styled.button`
    background-color: blue;
`;

function App() {
    // const [toDo, setToDo] = useState("");
    // const [toDos, setToDos] = useState<string[]>([]);
    // const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    //     setToDo(event.currentTarget.value);
    // };
    // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     if (toDo === "") {
    //         return;
    //     }
    //     const newToDos = [...toDos, toDo];
    //     setToDos(newToDos);
    //     setToDo("");
    // };
    return (
        <>
            <ResetCSS />
            <GlobalStyle />
            <Container>
                <ToDoHead />
                <CreateToDo />
                {/* <form onSubmit={onSubmit}>
                    <input
                        value={toDo}
                        onChange={onChange}
                        type="text"
                        placeholder="Write your ToDo"
                    />
                    <button>Add ToDo</button>
                </form>
                <ListContainer>
                    {toDos.map((todo, index) => (
                        <ToDoList check={false} todo={todo} />
                    ))}
                </ListContainer> */}
            </Container>
        </>
    );
}

export default App;
