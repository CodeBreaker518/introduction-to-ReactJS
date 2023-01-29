export function TodoList(props) {
  //destructuring object props
  const {children} = props
  return (
   <section>
    <ul>
      {children}
      {/* props.children = what's inside <TodoList>....</TodoList> */}
    </ul>
   </section>
  )
}
