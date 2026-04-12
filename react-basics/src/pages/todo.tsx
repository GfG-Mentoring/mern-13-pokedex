import { useContext } from "react";
import { TodoInput } from "../components/TodoInput";
import { TodoList } from "../components/TodoList";
import { TodoContext, TodoProvider } from "../context/TodoContext";


export default function Todo() {
    return <TodoProvider>
        <PrintTodos />
        <div className="flex m-2 justify-center items-center flex-col">
            <TodoInput />
            <TodoList />
        </div>
    </TodoProvider>
}


function PrintTodos() {
    const {todos} = useContext(TodoContext)
    console.log(todos)
    return  <></>
}

