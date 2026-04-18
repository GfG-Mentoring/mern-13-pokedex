import { useContext, useEffect } from "react";
import { TodoInput } from "../components/TodoInput";
import { TodoList } from "../components/TodoList";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../store/todoSlice";

export default function Todo() {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchTodos() as any);
    },[])

    return  <>
        <PrintTodos />
        <div className="flex m-2 justify-center items-center flex-col">
            <TodoInput />
            <TodoList />
        </div>
    </>
}


function PrintTodos() {
    // const {todos} = useContext(TodoContext)
    // console.log(todos)
    return  <></>
}

