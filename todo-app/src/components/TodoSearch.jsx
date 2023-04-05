import '../styles/TodoSearch.css'
import React from 'react'

export function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }
  // autoselect text input
  const handleFocus = (e) => {
    e.currentTarget.select()
  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col s12'>
            <div className='row'>
              <div className='input-field col s12'>
                <i className='material-icons prefix'>search</i>
                <input
                  type='text'
                  id='autocomplete-input'
                  className='autocomplete'
                  value={searchValue}
                  onChange={onSearchValueChange}
                  onFocus={handleFocus}
                />
                <label htmlFor='autocomplete-input'>Search...</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
