import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { toDoState } from "../atoms";

function ToDoList() {
    const toDos = useRecoilValue(toDoState);

    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <CreateToDo />
            <ul>
                {toDos.map((val) => (
                    <ToDo key={val.id} {...val} />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
