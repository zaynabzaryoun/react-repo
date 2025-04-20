import React, { useState } from 'react'

function ToDoList() {
    const [list, setList] = useState([])
    const [inputValue, setInputValue] = useState("")
    function handleSubmit(e) {
        e.preventDefault();
        if (inputValue.trim()) {
            setList([...list, inputValue])
        setInputValue("")
        }
    }
  return (
      <div>
          <h1>todo list</h1>
          <h3>{list.map((l, i) => <li key={i}>{l}</li>)}</h3>
          <form onSubmit={handleSubmit}>
              <input type="text" value={inputValue} placeholder='enter an item for this todo list' onChange={e => setInputValue(e.target.value)} />
              <button type='submit'>submit</button>
          </form>
    </div>
  )
}

export default ToDoList