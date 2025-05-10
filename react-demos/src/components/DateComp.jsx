import React, { useEffect, useState } from 'react'
import useFetch from './useFetch.jsx'

export default function DateComp() {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
    
  return (
      <div>
          <ul>{data && data.map(item => (
              <li key={item.id}>{item.title}</li>
          ))}</ul>
    </div>
  )
}
