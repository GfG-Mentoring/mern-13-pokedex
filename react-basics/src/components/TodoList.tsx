import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";

export function TodoList() {

    const { todos } = useContext(TodoContext);

    return <ul className="list-disc list-inside">
        {todos.map((todo: any) => (
            <TodoItem key={todo.id} todo={todo} />
        ))}
    </ul>
}