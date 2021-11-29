import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";

import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

import { useDispatch } from "react-redux";
import { initTodo } from "./features/todoSlice";
import axios from "axios";

function App() {
  const todoList = useSelector(selectTodoList);

  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(function (response) {
        console.log(response);
        dispatch(initTodo(response.data.slice(0, 9)));
      });
  }, []);

  return (
    <div className="App">
      {/*Login*/}
      <div className="app__container">
        <div className="app_todoContainer">
          {todoList.map((item) => (
            // todo component
            <TodoItem
              title={item.title}
              completed={item.completed}
              id={item.id}
            />
          ))}
        </div>

        <Input />
      </div>
      {/* done */}
    </div>
  );
}

export default App;
