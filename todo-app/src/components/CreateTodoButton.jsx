import "../styles/CreateTodoButton.css"
export function CreateTodoButton() {
  return (
    <>
    <div className="row">
      <div class="col s12 btn-add-item center-align">
          <a class="btn-floating btn-large waves-effect waves-light red ">
            <i class="material-icons">add_circle</i>
          </a>
      </div>
    </div>
    </>
  )
}
