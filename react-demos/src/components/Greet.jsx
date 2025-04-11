// function Greet() {
//     let name = "john"
//     let currectDate = new Date().getDate()
//     console.log(new Date().getDate());
    
    
//     return(
//         <div>
//             <h1>hello {name}</h1>
//             <p>{currectDate}</p>
//         </div>
//     )
// }

// export default Greet;

import React from 'react'

const ValidPassword = () => <h1>valid password</h1>
const InvalisPassword = () => <h1> invalid password</h1>


const Greet = ({isValid}) => {
    // if (isValid) {
    //     return <ValidPassword />
    // } else {
    //     return <InvalisPassword />
    // }
  return isValid ? <ValidPassword /> : <InvalisPassword />
}

export default Greet