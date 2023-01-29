export function TodoItem(props) {
  const {text} = props
  return (
    <li>
      <span>C</span>
      <p>{text}</p>
      {/* props.text = map of fakeToDos */}
      <span>X</span>
    </li>
  )
}
