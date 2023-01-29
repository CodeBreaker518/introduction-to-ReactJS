import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton.jsx";
import { TodoCounter } from "./components/TodoCounter.jsx";
import { TodoItem } from "./components/TodoItem.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { TodoSearch } from "./components/TodoSearch.jsx";
// import './App.css';

const fakeToDos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar curso de intro a React', completed: false},
  {text: 'Tomar agua a las 2', completed: false},
]

// components names starts with an UpperCase
function App() {
  return (
    // components
      <React.Fragment>

      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {fakeToDos.map( todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />

    </React.Fragment> 
    // React.Fragment avoid creating unnecessary div's,
    // we can also use <>components..</>
  )
}

export default App
