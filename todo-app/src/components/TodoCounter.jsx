import '../styles/TodoCounter.css'

export function TodoCounter({total, completed}) {
  return (
    <h2 className="todo-counter">Has completado {completed} de {total} TODO's</h2>
  )
}

