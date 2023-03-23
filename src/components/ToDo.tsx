import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);

    const onClick = ({ text, category, id }: IToDo) => {
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            const newToDo = { text, id, category };

            return [
                ...oldToDos.slice(0, targetIndex),
                newToDo,
                ...oldToDos.slice(targetIndex + 1),
            ];
        });
    };

    return (
        <li>
            <span>{text}</span>
            <button
                name="TO_DO"
                onClick={() => onClick({ text, id, category: "TO_DO" })}
                disabled={category === "TO_DO"}
            >
                To Do
            </button>
            <button
                name="DOING"
                onClick={() => onClick({ text, id, category: "DOING" })}
                disabled={category === "DOING"}
            >
                Doing
            </button>
            <button
                name="DONE"
                onClick={() => onClick({ text, id, category: "DONE" })}
                disabled={category === "DONE"}
            >
                Done
            </button>
        </li>
    );
}

export default ToDo;
