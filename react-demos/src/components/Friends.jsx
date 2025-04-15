import React from 'react'
import { useState } from 'react'
const Friends = () => {
    const [friends, setFriends] = useState(["alex", "john"])
    const addOneFriend = () => {
        setFriends([...friends, "sara"])
    }
    const removeOneFriend = () => {
        setFriends(friends.filter((f)=> f !== "john"))
    }
  return (
      <div>
          <ul>
              {friends.map((f, i) => (
              <li key={i}>{f}</li>
              ))}
          </ul>

          <button onClick={addOneFriend}>add new friend</button>
          <button onClick={removeOneFriend}>remove one friend</button>
    </div>
  )
}

export default Friends