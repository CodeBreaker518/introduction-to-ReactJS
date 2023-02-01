import '../styles/TodoItem.css'

export function TodoItem(props) {

  const onComplete = event => {
    event.target.toggleAttribute('checked')
    alert(`completaste el todo ${props.text}`)
  }
  const onDelete = () => {
    alert('borraste un item')
  }
  return (
    <li className="todo-list-item">

      <div className="row pink darken-3 valign-wrapper">

        <div className="col s9">
          <p>
            <label>
              <input onClick={onComplete} type="checkbox"/>
              <span className={`text-item ${props.completed && 'text-item--completed'}`}>{props.text}</span>
            </label>
          </p>
        </div>

        <div className="col s3 m2">
          <p>
            <a onClick={onDelete} href='#!'className="btn btn-small waves-effect waves-light red align-right">
              <i className="material-icons">remove</i>
            </a>
          </p>
        </div>
      </div>
    </li>
  )
}
