import React from 'react'
import { useState } from 'react'

const Profile = () => {
    const [user, setUser] = useState({name: "", age: ""})
  return (
      <div>
          <h1>profile</h1>
          <h3>name: {user.name}</h3>
          <h4>age: {user.age}</h4>
          <input type="text" name="name"  placeholder='name' value={user.name} onChange={e => setUser({...user, name: e.target.value})}/>
          <input type="text" name="age" value={user.age} onChange={e => setUser({...user, age: e.target.value })} placeholder='age'/>
    </div>
  )
}

export default Profile