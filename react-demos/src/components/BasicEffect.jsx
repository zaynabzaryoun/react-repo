// // import React, { useEffect } from 'react'

// // const BasicEffect = () => {
// //     // console.log("first render");
// //     useEffect(()=>{console.log("first");
// //     }, [])
    
// //   return (
// //     <div>BasicEffect</div>
// //   )
// // }

// // export default BasicEffect

// import React, { useEffect, useState } from 'react'

// const BasicEffect = () => {
//     const [counter, setCounter] = useState(0)

//     useEffect(() => {
//         document.title = `counter is ${ counter }`
//     }, [counter])
//   return (
//       <div>
//           <button onClick={()=> setCounter(counter + 1)}>increment</button>
//     </div>
//   )
// }

// export default BasicEffect

import React, { useEffect, useState } from 'react'

const BasicEffect = () => {
    const [apiData, setApiData] = useState([])
    useEffect(() => {
        async function getData() {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await res.json()
            setApiData(data)
        
            
        }
        getData()
    }, [])
  return (
      <div>
          {/* <h1>the title of the first post:</h1> */}
          <h2>{apiData[0].title}</h2>
    </div>
  )
}

export default BasicEffect