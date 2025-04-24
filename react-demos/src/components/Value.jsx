import React from 'react'
import { useState, useEffect } from 'react'

// const Value = () => {
//     const [value, setValue] = useState(0)
//     const[something, setSomething] = useState(0)
//     useEffect(() => {
//         if (value > 0) {
//             console.log("call useEffect");
//             document.title = `increment ${value}`
//         }
        
//     }, [value, something])
//   return (
//       <div>
//           <h2>{value}</h2>
//           <button onClick={() => setValue(value + 1)}>increase</button>
//           <button onClick={() => setSomething(something + 1)}>increase by something</button>
//     </div>
//   )
// }

// export default Value


const Value = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const reponse = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await reponse.json()
            if(data && data.length) setData(data)
        }
        getData()
    }, [])
  return (
      <div>
          <ul>
              {data.map((todo) => (
                  <section key={todo.id}>
                      <li >{todo.title}</li>
                      <li>{todo.body}</li>
                  </section>
              ))}
          </ul>
    </div>
  )
}

export default Value