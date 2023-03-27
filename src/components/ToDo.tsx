import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

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
                name={Categories.TO_DO}
                onClick={() =>
                    onClick({ text, id, category: Categories.TO_DO })
                }
                disabled={category === Categories.TO_DO}
            >
                To Do
            </button>
            <button
                name={Categories.DOING}
                onClick={() =>
                    onClick({ text, id, category: Categories.DOING })
                }
                disabled={category === Categories.DOING}
            >
                Doing
            </button>
            <button
                name={Categories.DONE}
                onClick={() => onClick({ text, id, category: Categories.DONE })}
                disabled={category === Categories.DONE}
            >
                Done
            </button>
        </li>
    );
}

export default ToDo;
