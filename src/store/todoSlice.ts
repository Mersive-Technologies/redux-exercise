import { createSlice } from '@reduxjs/toolkit';

export interface TodoInfo {
  id: string;
  label: string;
  complete: boolean;
}

const initialState: TodoInfo[] = [
  {
    id: '123',
    label: 'Learn Redux',
    complete: false,
  },
];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log('ADD TODO', action.payload);
      const newTodo = {
        id: Math.random().toString(),
        label: `${action.payload}`,
        complete: false,
      };
      state.push(newTodo);
    },
    toggleTodo: (state, action) => {
      console.log('COMPLETE TODO', action.payload);
      const todoId: string = action.payload;
      const todo = state.find(todo => todo.id === todoId);
      if (todo) {
        todo.complete = !todo.complete;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
