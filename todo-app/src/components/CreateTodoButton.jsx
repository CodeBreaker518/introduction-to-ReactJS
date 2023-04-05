import '../styles/CreateTodoButton.css'
export function CreateTodoButton(props) {
  const onClickButton = () => {
    console.log('creaste un item')
  }
  return (
    <>
      <div className='row'>
        <div className='col s12 btn-add-item center-align'>
          <a onClick={onClickButton} href='#!' className='btn-floating btn-large waves-effect waves-light purple '>
            <i className='material-icons'>add</i>
          </a>
        </div>
      </div>
    </>
  )
}
