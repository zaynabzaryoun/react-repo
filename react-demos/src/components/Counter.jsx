// import React, { useReducer } from 'react'


// const initialState = { count: 0 }

// function reducer(state, action){
//     switch (action.type) {
//         case "increment":
//             return { ...state, count: state.count + 1 }
//         case "decrement":
//             return { ...state, count: state.count - 1 }
//         case "reset":
//             return { ...state, count: 0 }
//         default:
//             return state
//     }

// }

// export default function Counter() {
//     const [state, dispatch] = useReducer(reducer, initialState)
//     return (
//         <div>
//             <button onClick={() => dispatch({ type: "increment" })}>+</button>
//             <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//             <button onClick={() => dispatch({ type: "reset"})}>reset</button>
//             <h1>count: {state.count}</h1>
//       </div>
      
//   )
// }


import React, { useReducer } from 'react'
initialState = {counter  : 0}
export default function Counter() {
   const [state, dispatch] = useReducer(reducer, initialState)
  return (
      <div>Counter: {state.counter}</div>
  )
}
