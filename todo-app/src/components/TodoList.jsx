export function TodoList(props) {
  //destructuring object props
  const {children} = props
  return (
    <>
    <div className="todo-list container">
      <section>
        <ul className="collection">
          {children}
          {/* props.children = what's inside <TodoList>....</TodoList> */}
        </ul>
      </section>
    </div>
   </>
  )
}
