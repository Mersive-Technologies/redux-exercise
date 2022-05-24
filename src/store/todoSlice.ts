import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface Todo {
  complete: boolean
  label: string
  id: string
}
export const todoSlice = createSlice({
  name: 'Todos',
  initialState: { todos: new Array<Todo>() },
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload)
      },
      prepare: (label: string) => {
        return { payload: { complete: false, label, id: nanoid() } }
      }
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload)!
      todo.complete = !todo.complete
    }
  },
});

// export const { } = todoSlice.actions;

// export const selectExample = (state: RootState) => state.counter.value;

export default todoSlice.reducer;
