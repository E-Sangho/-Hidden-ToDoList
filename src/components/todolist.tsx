import { useState } from "react";
import styled, { css } from "styled-components";

interface IToDoList {
    check: boolean;
    todo: string;
    toDos: string[];
    setToDos: React.Dispatch<React.SetStateAction<string[]>>;
}

interface ICheckBlock {
    check: boolean;
}

const RemoveBlock = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #d63031;
    margin: 0 20px;
    visibility: hidden;
    color: #d63031;
`;

const TodoListBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    &:hover {
        ${RemoveBlock} {
            visibility: visible;
        }
    }
`;

const CheckBlock = styled.div<ICheckBlock>`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #b2bec3;
    margin: 0 20px;
    color: #b2bec3;
    cursor: pointer;
    ${(props) =>
        props.check &&
        css`
            color: #00b894;
            border: 1px solid #00b894;
        `}
`;

const TodoBlock = styled.div<ICheckBlock>`
    font-size: 24px;
    ${(props) =>
        props.check &&
        css`
            color: #b2bec3;
        `}
`;

function ToDoList({ check, todo, toDos, setToDos }: IToDoList) {
    const [isChecked, setIsChecked] = useState(check);
    const onClick = () => {
        setIsChecked((isChecked) => !isChecked);
    };
    const removeComponent = () => {
        setToDos(toDos.filter((toDo) => toDo !== todo));
    };
    return (
        <TodoListBlock>
            <CheckBlock check={isChecked} onClick={onClick}>
                {isChecked && <i className="fas fa-check" />}
            </CheckBlock>
            <TodoBlock check={isChecked}>{todo}</TodoBlock>
            <RemoveBlock onClick={removeComponent}>
                <i className="fas fa-minus"></i>
            </RemoveBlock>
        </TodoListBlock>
    );
}

export default ToDoList;
