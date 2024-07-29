import "./style.css";
import SimpleTodoList from "./SimpleTodoList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function SimpleTodo() {
  const [todoArray, setTodoArray] = useState([]);
  const [inputVal, setInputVal] = useState("");
  //

  function updateTodo() {
    if (inputVal) {
      const uniqueId = uuidv4();
      setTodoArray((currentTodoArray) => {
        return [...currentTodoArray, {todoName: inputVal, id: uniqueId}];
      });
      setInputVal("");
    }
  }
  function deleteSpecificTodo(id) {
    setTodoArray(currentTodoArray => {
      return currentTodoArray.filter(element => element.id !== id)
    })
  }
  return (
    <>
      <ul id="list">
        {todoArray.map((todoItem) => {
          
          return (
            <SimpleTodoList key={todoItem.id} id={todoItem.id} item={todoItem.todoName} deleteSpecificTodo={deleteSpecificTodo} />
          );
        })}
      </ul>
      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button onClick={updateTodo}>Add Todo</button>
      </div>
    </>
  );
}
