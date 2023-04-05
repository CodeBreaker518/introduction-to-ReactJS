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
  { text: 'Tomar agua a las 2', completed: false },
  { text: 'Tomar agua a las 10', completed: false },
]

// components names starts with UpperCase
function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState('')
  const totalTodos = todos.length
  const completedTodos = todos.filter((todo) => todo.completed).length

  let searchedTodos = []
  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  // mark as complete a to do
  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    setTodos(newTodos) // new list of todos updated with completed?
  }
  // delete to do's
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos) // new list of todos updated with completed?
  }

  return (
    // components
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
    // <React.Fragment/> avoid creating unnecessary div's,
    // we can also use <>components..</>
  )
}

export default App
