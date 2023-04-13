import React, { createRef } from 'react'
import '../styles/CreateTodoModal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
export default function CreateTodoModal(props) {
  const { isActive, handleClick, createTodo } = props
  let textInput = createRef()
  let todoModalContainer = createRef()

  const createNewTodo = () => {
    createTodo(textInput.current.value)
    textInput.current.value = ''
    handleClick()
  }

  return (
    <>
      <div className={`background-screen ${isActive ? '' : 'inactive'}`}> </div>
      <div ref={todoModalContainer} className={`todo-modal-container container ${isActive ? '' : 'inactive'}`}>
        <div className='row'>
          <div className='col s12'>
            <div className='row'>
              <div className='input-field col s12 todo-title-container'>
                <button className='close-btn' onClick={handleClick}>
                  <FontAwesomeIcon icon={faClose} />
                </button>
                <input ref={textInput} id='todoName' className='todo-name' type='text' />
                <label htmlFor='todoName'>To do Title</label>
              </div>
              <div className='input-field col s12 todo-btn-container'>
                <div className='todo-add-btn' onClick={createNewTodo}>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
