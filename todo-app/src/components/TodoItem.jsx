import '../styles/TodoItem.css'

export function TodoItem(props) {
  const {text} = props
  return (
    <li className="todo-list-item">

      <div class="row pink darken-3 valign-wrapper">

        <div class="col s9">
          <p>
            <label>
              <input type="checkbox" />
              <span className="text-item">{text}</span>
            </label>
          </p>
        </div>

        <div class="col s3 m2">
          <p>
            <a href='#!'class="btn btn-small waves-effect waves-light red align-right">
              <i class="material-icons">remove</i>
            </a>
          </p>
        </div>
      </div>

    </li>
  )
}
