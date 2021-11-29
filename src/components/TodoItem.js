import { Checkbox } from "@mui/material";
import React from "react";
import "./TodoItem.css";

import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";

const TodoItem = ({ title, completed, id }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setCheck(id));
  };
  return (
    <div className="todoItem">
      {/* checkbox*/}
      <Checkbox
        checked={completed}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      {/* name*/}
      <p className={completed && "todoItem--done"}>{title}</p>
    </div>
  );
};

export default TodoItem;
