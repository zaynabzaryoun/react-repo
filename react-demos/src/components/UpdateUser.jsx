import React, { useContext, useState } from 'react'
import { Context } from './UserContext'

const UpdateUser = () => {
    // const updateUserContext = useContext(Context)
    const {setUser} = useContext(Context)
   
    const [newUser, setNewUser] = useState("")

    function handleClick() {
        setUser(newUser)
        setNewUser("")
    }
    
  return (
      <div>UpdateUser
          <input type="text" value={newUser} onChange={ e => setNewUser(e.target.value)}/>
          <button onClick={handleClick}>update user</button>
      </div>
      
  )
}

export default UpdateUser