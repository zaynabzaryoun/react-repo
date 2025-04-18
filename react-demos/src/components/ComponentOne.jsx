import React from 'react'

const ComponentOne = ({count, onClick}) => {
  return (
      <div>
          <p>{count}</p>
          <button onClick={onClick}>increment</button>
    </div>
  )
}

export default ComponentOne