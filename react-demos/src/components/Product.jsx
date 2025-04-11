// import React from 'react'

// const Product = (props) => {
//   return (
//       <div>
//           <h1>name: {props.name}</h1>
//           <p>price: ${props.price}</p>
//     </div>
//   )
// }

// export default Product

import React from 'react'

const Product = ({ children}) => {
  return (
      <div>
          <h1>{children}</h1>
    </div>
  )
}

export default Product