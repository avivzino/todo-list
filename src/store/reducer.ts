import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ReducerState, TodoItemType } from 'src/types/store';

const initialState: ReducerState = {
  todos: [],
};

const todosReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Adding todo
    addTodo: (state, action: PayloadAction<TodoItemType>) => {
      state.todos.push(action.payload);
    },
    completeTodo: (state, action: PayloadAction<number>) => {
      const todoItemIndex = state.todos.findIndex(
        (item) => item.id === action.payload
      );
      if (todoItemIndex !== -1) {
        // Remove the completed item from its current position
        const completedTodo = state.todos.splice(todoItemIndex, 1)[0];
        // Add the completed item to the end of the array
        state.todos.push(completedTodo);
        // Update its completion status
        completedTodo.completed = true;
      }
    },
    toggleEditMode: (state, action: PayloadAction<number>) => {
      const todoItem = state.todos.find((item) => item.id === action.payload);
      if (todoItem) {
        todoItem.editMode = !todoItem.editMode;
      }
    },
    editTodo: (
      state,
      action: PayloadAction<{ id: number; newItem: string }>
    ) => {
      const { id, newItem } = action.payload;
      // Find the todo item with the given id
      const todoItem = state.todos.find((item) => item.id === id);
      if (todoItem) {
        todoItem.item = newItem;
        todoItem.editMode = false;
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      // Remove the todo item from the state by filtering out any items with the matching id
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const getTodos = (state: ReducerState) => state.todos;

export const { addTodo, completeTodo, removeTodo, toggleEditMode, editTodo } =
  todosReducer.actions;
export const reducer = todosReducer.reducer;
