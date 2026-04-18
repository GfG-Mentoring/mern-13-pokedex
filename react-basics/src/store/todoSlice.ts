import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data;
})


const todoSlice = createSlice({
    name: "todo",
    initialState: {
        // everything after and including `as` keyword is just for typescript  
        todos: [] as { id: number, title: string, completed: boolean }[],
        isLoading: false,
        hasError: false,
    },
    reducers: {
        addTodo: (state, action) => {
            const todoString = action.payload;

            if(!todoString.trim()) return;

            const newTodo = {
                id: Math.random(), 
                title: todoString.trim(),
                completed: false,
            }
            state.todos.push(newTodo);
        },
        toggleTodo: (state,action) => {
            const todoId = action.payload;
            const todo = state.todos.find((todo) => todo.id === todoId);
            if(todo) {
                todo.completed = !todo.completed;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state)=> {
            state.isLoading = true;
            state.hasError = false;
        }),
        builder.addCase(fetchTodos.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.todos = action.payload;
            state.hasError = false;
        }),
        builder.addCase(fetchTodos.rejected, (state)=> {
            state.isLoading = false;
            state.hasError = true;
            state.todos = [];
        })
    }
})


export const { addTodo, toggleTodo } = todoSlice.actions;

export {todoSlice};

