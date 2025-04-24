import React from 'react'
import { useState } from 'react'

const ShoppingList = () => {
    const [list, setList] = useState([])
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")
    
    const style = {
        color: "red",
        fontSize: "10px"
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (!name) {
            const nameError = document.querySelector(".nameError")
            nameError.textContent = "please fill this feild"

        } 
        if (!quantity) {
            const quantityError = document.querySelector(".quantityError") 
            quantityError.textContent = "please fill this feild"
            return
        }
        setList((prevList)=> [...prevList, {name, quantity: parseInt(quantity) }])
        console.log(list);
        
        
        setName("")
        setQuantity("")

        

    }
  return (
      <div>
          <h1>name: {name}</h1>
          <h2>quantity:{quantity}</h2>
          <ul>list:
              {list.map((item, i) => {
                  return <li key={i}>{item.name}, {item.quantity}</li>
              })}
          </ul>

          <form onSubmit={handleSubmit}>
              <label htmlFor="name"> name:
                  <input type="text" name="name" value={name} onChange={e => { setName(e.target.value); console.log(name) }} />
                  <p className="nameError" style={style}></p>
              </label>
              <label htmlFor="quantity"> quantity
                  <input type="text" name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
                  <p className='quantityError' style={style}></p>
              </label>
              <button type='submit'>submit</button>
          </form>
    </div>
  )
}

export default ShoppingList