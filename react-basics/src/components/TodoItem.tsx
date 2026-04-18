import { useDispatch } from "react-redux";
import { toggleTodo } from "../store/todoSlice";

export const TodoItem = ({ todo }: { todo: any }) => {


    const dispatch = useDispatch();

    return <li key={todo.id} style={{
        textDecoration: todo.completed ? "line-through" : "none",
        opacity: todo.completed ? 0.5 : 1,
    }}>
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
            className="mr-2"
        />
        {todo.title}
    </li>
}