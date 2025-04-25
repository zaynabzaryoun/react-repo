import React, { useContext } from 'react'
import { Context } from './UserContext'

const UserProfile = () => {
    // const userContext = useContext(Context)
    const {user} = useContext(Context)
   
   
    
  return (
      <div>
          {/* <h1>hello my name is {userContext.user}</h1> */}
          <h1>hello my name is {user}</h1>
    </div>
  )
}

export default UserProfile