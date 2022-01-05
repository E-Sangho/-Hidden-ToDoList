import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ResetCSS from "./components/resetcss";
import GlobalStyle from "./components/globalstyle";
import Container from "./components/container";
import ToDoHead from "./components/head";

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
            </Container>
            {/* <form onSubmit={onSubmit}>
                <input
                    value={toDo}
                    onChange={onChange}
                    type="text"
                    placeholder="Write your ToDo"
                />
                <button>Add ToDo</button>
            </form>
            <hr />
            <ul>
                {toDos.map((todo, index) => (
                    <li key={toDos.length - index}>{todo}</li>
                ))}
            </ul> */}
        </>
    );
}

export default App;
