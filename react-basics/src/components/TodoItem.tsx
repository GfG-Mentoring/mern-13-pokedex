import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

export const TodoItem = ({ todo }: { todo: any }) => {


    const { toggleTodo : handleToggleTodo } = useContext(TodoContext)
    
    
    return <li key={todo.id} style={{
        textDecoration: todo.completed ? "line-through" : "none",
        opacity: todo.completed ? 0.5 : 1,
    }}>
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggleTodo(todo.id)}
            className="mr-2"
        />
        {todo.todo}
    </li>
}