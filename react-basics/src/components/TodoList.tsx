import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
import { ShimmerCategoryItem } from "react-shimmer-effects";

export function TodoList() {

    const todos = useSelector((state: any) => state.todo.todos);
    const isLoading = useSelector((state: any) => state.todo.isLoading);


    if (isLoading) return <div className="flex flex-col gap-2 w-full justify-center text-center p-8">
    {new Array(10).fill(0).map((_, index) =>
        <ShimmerCategoryItem key={index} />
    )}
    </div>

    return <ul className="list-disc list-inside">
        {todos.map((todo: any) => (
            <TodoItem key={todo.id} todo={todo} />
        ))}
    </ul>
}