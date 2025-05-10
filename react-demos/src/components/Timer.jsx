import React, { useEffect, useState } from 'react'
import {useRef} from "react"

export default function Timer() {
  const [count, setCount] = useState(null)
  const  intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
        setCount(prevCount => prevCount + 1)
    }, 1000)
    
    return () => {
      clearInterval(intervalRef.current)
    }
    }, [])
  return (
      <div>
      <h1>timer: {count}</h1>
      <button onClick={()=> clearInterval(intervalRef.current)}>stop timer</button>
          
    </div>
  )
}
