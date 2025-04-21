import React from 'react'
import { useState } from 'react'

const ShoppingList = () => {
    const [list, setList] = useState([])
    function handleSubmit(e) {
        e.preventDefault()

    }
  return (
      <div>
          <h3>list: {list}</h3>
          {/* <h4>name: {}</h4> */}
          <form onSubmit={handleSubmit}>
              <label htmlFor="name"> name:
                  <input type="text" name="name"  onChange={e => setList([...list, {name: e.target.value}])} />
              </label>
              <label htmlFor="quantity"> quantity
                  <input type="text" name="quantity"  onChange={e => setList([...list, {quantity: e.target.value}])} />
              </label>
              <button type='submit'>submit</button>
          </form>
    </div>
  )
}

export default ShoppingList