import { useState } from "react";
import styled from "styled-components";
import ListContainer from "./listcontainer";
import ToDoList from "./todolist";

const FormBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-itmes: center;
    margin-top: 10px;
    form {
        display: flex;
        justify-content: center;
        input {
            width: 40%;
            border: 1px solid #00b894;
            border-radius: 5px;
            padding-left: 10px;
            height: 40px;
            box-sizing: border-box;
            &:focus {
                outline: none;
            }
        }
        button {
            margin-left: 10px;
            background-color: #0984e3;
            border-radius: 18px;
            color: white;
            border: none;
        }
    }
`;

function CreateToDo() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState<string[]>([]);
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        setToDo(event.currentTarget.value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        const isDuplicated = toDos.includes(toDo);
        if (isDuplicated) {
            console.log("The thing is duplicated");
            return;
        }
        const newToDos = [...toDos, toDo];
        setToDos(newToDos);
        setToDo("");
    };
    return (
        <FormBlock>
            <form onSubmit={onSubmit}>
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
                    <ToDoList
                        key={toDos.length - index}
                        check={false}
                        todo={todo}
                        toDos={toDos}
                        setToDos={setToDos}
                    />
                ))}
            </ListContainer>
        </FormBlock>
    );
}

export default CreateToDo;
