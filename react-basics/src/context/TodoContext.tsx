import { createContext, useState } from "react";

export const TodoContext = createContext<{
    todos: any[],
    addTodo: (todo: string) => any,
    toggleTodo: (id: number) => any,
}>({
    todos: [],
    addTodo: (todo: string) => { },
    toggleTodo: (id: number) => { },
});


export function TodoProvider({ children }: { children: React.ReactNode }) {
    const [todos, setTodos] = useState<any[]>([
        { id: 1, todo: "Buy groceries", completed: true },
        { id: 2, todo: "Buy vegetables", completed: false },
        { id: 3, todo: "Buy fruits", completed: true },
        { id: 4, todo: "Buy meat", completed: false },
        { id: 5, todo: "Buy fish", completed: false },
        { id: 6, todo: "Buy eggs", completed: true },
        { id: 7, todo: "Buy milk", completed: true },
        { id: 8, todo: "Buy bread", completed: false },
    ]);

    const handleAddTodo = (todo: string) => {
        if (!todo.trim()) return;

        const newTodo = {
            id: todos.length + 1,
            todo: todo.trim(),
            completed: false
        };
        setTodos([...todos, newTodo]);
        return newTodo;
    }

    const handleToggleTodo = (id: number) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    return <TodoContext.Provider
        value={{
            todos,
            toggleTodo: handleToggleTodo,
            addTodo: handleAddTodo
        }}
    >
        {children}
    </TodoContext.Provider>

}