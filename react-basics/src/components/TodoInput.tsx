import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export function TodoInput() {
    const [todo, setTodo] = useState<string>("");

    const { addTodo:handleAddTodo} = useContext(TodoContext)

    const handleClick = () => {
        const isTodoCreated = handleAddTodo(todo);
        if(!isTodoCreated) return;
        setTodo("");
    }

    return <div className="flex gap-2">
        <input
            onChange={(e) => setTodo(e.target.value)}
            className="border-2 border-gray-300 rounded-md p-2 w-full"
            type="text"
            placeholder="Add a todo"
            value={todo}
        />
        <button onClick={()=> handleClick()}>Add</button>
    </div>
}