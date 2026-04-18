import {  useState } from "react";
import { addTodo } from "../store/todoSlice";
import { useDispatch } from "react-redux";

export function TodoInput() {
    const [todo, setTodo] = useState<string>("");

    const dispatch = useDispatch();


    const handleClick = () => {
        dispatch(addTodo(todo));
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