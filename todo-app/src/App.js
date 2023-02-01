import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton.jsx";
import { TodoCounter } from "./components/TodoCounter.jsx";
import { TodoItem } from "./components/TodoItem.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { TodoSearch } from "./components/TodoSearch.jsx";
// import './App.css';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar curso de intro a React', completed: false},
  {text: 'Tomar agua a las 2', completed: false},
]

// components names starts with an UpperCase
function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length
  let searchedTodos = []

  if (!searchValue.length >= 1){
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  return (
    // components
      <>
        <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
        />
        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />
        <TodoList>
          {searchedTodos.map( todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed ={todo.completed}/>
          ))}
          
        </TodoList>
        <CreateTodoButton />
        
      </> 
      // <React.Fragment/> avoid creating unnecessary div's,
      // we can also use <>components..</>
  )
}

export default App
