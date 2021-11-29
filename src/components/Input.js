import React, { useState } from "react";
import "./Input.css";
import {
  Toolbar,
  AppBar,
  CssBaseline,
  IconButton,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import { Menu as MenuIcon, Check, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    console.log(`adding ${input}`);

    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  };
  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Añadi!</button>
    </div>
  );
};

export default Input;
