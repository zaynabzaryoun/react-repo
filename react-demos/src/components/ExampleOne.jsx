// import React, { useState } from 'react'

// const ExampleOne = () => {
//     const [count, setCount] = useState(() => {
//         let initialValue = 10;
//         return initialValue;
//     })

//     const increment = () => {
//         setCount((pre) => pre + 1)
//     }
//   return (
//       <div>
//           <h1>count: {count}</h1>
//           <button onClick={increment}>increment</button>
//     </div>
//   )
// }

// export default ExampleOne


// import React, { useState } from 'react'

// const ExampleOne = () => {
//     const [randomNum, setRandomNum] = useState(() => Math.floor(Math.random() * 100))
//     const generateRandomNum = () => {
//         setRandomNum(Math.floor(Math.random()*100))
//     }
//   return (
//       <div>
//           <h1>random num: {randomNum}</h1>
//           <button onClick={generateRandomNum}>generate random num</button>
//     </div>
//   )
// }

// export default ExampleOne

import React, { useEffect, useState } from 'react'

const ExampleOne = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name")
    return savedName ? JSON.parse(savedName) : "";
  })

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name))
  }, [name])

  const handleClear = () => setName("") 
  const handleChange = (e) => setName(e.target.value)
  return (
    <div>
      <h1>your name: {name}</h1>
      <input type="text" value={name} onChange={handleChange} placeholder='enter your name' />
      <button onClick={handleClear}>clear name</button>
      
    </div>
  )
}

export default ExampleOne