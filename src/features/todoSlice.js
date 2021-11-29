import { createSlice } from "@reduxjs/toolkit";

//const [todoList, serTodoList] = useState([])
//setTodoList (action)

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    initTodo: (state, action) => {
      state.todoList = action.payload;
    },

    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },

    setCheck: (state, action) => {
      console.log(state);
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.completed === true) {
            item.completed = false;
          } else {
            item.completed = true;
          }
        }
      });
    },
  },
});

export const { saveTodo, setCheck, initTodo } = todoSlice.actions;

export const selectTodoList = (state) => state.todos.todoList;

export default todoSlice.reducer;
