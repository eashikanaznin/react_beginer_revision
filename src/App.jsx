import React from "react";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import { TodoListClass } from "./TodoListClass";
import Counter from "./Counter";
import ArrayStateProject from "./ArrayStateProject";
import CounterwithNameProject from "./CounterwithNameProject";
import { Child } from "./Child";
import FetchApi from "./FetchApi";
import UserList from "./UserList";
import SimpleTodo from "./simpleTodo/SimpleTodo";
import UseFetchComponent from "./useFetchCustomHook/UseFetchComponent";
import UseLocalStorageComponent from "./useLocalStorageCustomHook/UseLocalStogareComponent";
import LoginForm from "./form/LoginForm";


function App() {
  // useEffect Hook Exercises
  const [show, setShow] = useState(true);
  const childComponent = show ? <Child /> : null;

  return (
    <div>

      {/* <TodoList isChecked>Complete study</TodoList>
      <TodoList> Complete test</TodoList>
      <TodoListClass />

      <h3>useState Example</h3>
      <Counter />

      <h3>Array state project</h3>
      <ArrayStateProject />

      <h3>Counter with Name project</h3>
      <CounterwithNameProject />

      <h3>UseEffect excercise</h3>
      <div>
        <button onClick={() => setShow((currentShow) => !currentShow)}>
          Show/Hide
        </button>
        {childComponent}
      </div>

      <FetchApi/>
      
      <h3>Fetch userlist and map</h3>
      <UserList />

      <h3>Simple Todo Project</h3>
      <SimpleTodo />

      <h3>Custom Hook:: use fetch</h3>
      <span>Note:: Combination of other hooks and logics, starts with 'use', can reside in a separate file</span>
      <UseFetchComponent />

      <h3>Another custom hook usestate and local storage</h3>
      <UseLocalStorageComponent/> */}

      <h3>Form Project</h3>
      <LoginForm/>
    </div>
  );
}

export default App;
