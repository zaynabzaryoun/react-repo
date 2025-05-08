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


import React, { useReducer, useState } from 'react'
import { initialState, counterReducer } from './counterReducer';

export default function Counter() {
   
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [inputValue, setInputValue] = useState(0)
  return (
      <div>
          <h1>Counter: {state.counter}</h1>
          <button onClick={e => dispatch({ type: "increment" })}>incremnt</button>
          <button onClick={e => dispatch({ type: "decrement" })}>decremnt</button>
          

          <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button onClick={() => {dispatch({type: "incByAmount", payload: +inputValue}); setInputValue(0)}}>add</button>
          <button onClick={() => { dispatch({ type: "decByAmount", payload: Number(inputValue) });  setInputValue(0)}}>sub</button>
          
      </div>
  )
}
