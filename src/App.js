import { useState, useEffect } from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => {
        setToDo(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDos((array) => [toDo, ...array]);
        setToDo("");
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
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
            </ul>
        </div>
    );
}

export default App;
