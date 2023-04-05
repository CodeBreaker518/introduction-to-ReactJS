export function CreateTodoButton(props) {
  const onClickButton = () => {
    console.log('creaste un item')
  }
  return (
    <>
      <div className='todo-create-btnrow'>
        <div className='col s12 btn-add-item center-align'>
          <button onClick={onClickButton} className='btn-floating btn-large waves-effect waves-light purple '>
            <i className='material-icons'>add</i>
          </button>
        </div>
      </div>
    </>
  )
}
