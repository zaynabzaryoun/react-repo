import React from 'react'
import {useRef} from "react"

export default function Timer() {
   const el =  useRef(null)
    let count = 0 
     el = setInterval(() => {
     
        count += 1
        console.log(count);
        
    }, 1000)
  return (
      <div>{el}
          
    </div>
  )
}
