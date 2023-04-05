import React from 'react'
import { useState } from 'react'
import { CreateTodoButton } from './components/CreateTodoButton.jsx'
import { TodoCounter } from './components/TodoCounter.jsx'
import { TodoItem } from './components/TodoItem.jsx'
import { TodoList } from './components/TodoList.jsx'
import { TodoSearch } from './components/TodoSearch.jsx'

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar curso de intro a React', completed: false },
  { text: 'Pasear al perro', completed: false },
  { text: 'Tomar agua a las 10', completed: false },
]

// components names starts with UpperCase
function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState('')
  const completedTodos = todos.filter((todo) => todo.completed).length
  const totalTodos = todos.length

  // searching to do's that match with input value
  let searchedTodos = []
  if (searchValue.length < 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const toggleCompleteTodo = (text) => {
    setTodos(
      todos.map((todo) => {
        if (todo.text === text) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )
  }

  const deleteTodo = (text) => {
    setTodos(todos.filter((todo) => todo.text !== text))
  }

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
