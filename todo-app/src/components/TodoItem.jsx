import React, { useState, useRef } from 'react'
import '../styles/TodoItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export function TodoItem(props) {
  const [completed, setCompleted] = useState(false)
  const itemRef = useRef(null)

  const onComplete = (event) => {
    setCompleted(!completed)
    event.target.toggleAttribute('checked')
    props.onComplete()
  }

  const onDelete = () => {
    console.log(`Eliminaste el todo ${props.text}`)
    itemRef.current.classList.add('slide-out-left')
    setTimeout(() => {
      props.onDelete()
    }, 500)
  }

  return (
    <li className='todo-item-list' ref={itemRef}>
      <div className='row pink darken-3 valign-wrapper todo-item'>
        <div className='col s9'>
          <p>
            <label>
              <input onChange={onComplete} type='checkbox' checked={completed} />
              <span className={`text-item ${completed ? 'text-item--completed' : ''}`}>{props.text}</span>
            </label>
          </p>
        </div>
        <div className='col s3 m2'>
          <p>
            <button onClick={onDelete} className='btn btn-small waves-effect waves-light red align-right'>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </p>
        </div>
      </div>
    </li>
  )
}
