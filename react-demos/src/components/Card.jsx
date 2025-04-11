import React from 'react'

const Card = () => {
    const items = ["wireless airbuds", "laptop", "keyboard"]
  return (
      <div>
          {items.length > 0 && <h2>you have {items.length} items in your list</h2>}
          <ul>
              <h4>products</h4>
              {items.map(item => (
                  <li key={Math.random()}>{item}</li>
              ))}
          </ul>
    </div>
  )
}

export default Card