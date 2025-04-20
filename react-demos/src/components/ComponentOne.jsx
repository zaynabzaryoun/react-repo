// import React from 'react'

// const ComponentOne = ({count, onClick}) => {
//   return (
//       <div>
//           <p>{count}</p>
//           <button onClick={onClick}>increment</button>
//     </div>
//   )
// }

// export default ComponentOne

import React, { useState } from 'react'

const ComponentOne = () => {
  const [counter, setCounter] = useState(0)
  const handleClick = () => {
    setCounter(prev => prev + 1)
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={handleClick}>add one</button>
    </div>
  )
}

export default ComponentOne