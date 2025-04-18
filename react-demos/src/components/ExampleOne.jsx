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


import React, { useState } from 'react'

const ExampleOne = () => {
    const [randomNum, setRandomNum] = useState(() => Math.floor(Math.random() * 100))
    const generateRandomNum = () => {
        setRandomNum(Math.floor(Math.random()*100))
    }
  return (
      <div>
          <h1>random num: {randomNum}</h1>
          <button onClick={generateRandomNum}>generate random num</button>
    </div>
  )
}

export default ExampleOne