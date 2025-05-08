import React from 'react'
import {useRef} from "react"

export default function RefComponent() {
    const inputElement = useRef(null)
    console.log(inputElement);
    const focusInput = () => {
        inputElement.current.focus();
        inputElement.current.value = " :("
    }
    
  return (
      <div>RefComponent
          <input type="text" ref={inputElement} />
          <button onClick={() => focusInput()}>focus & write cry</button>
    </div>
  )
}
