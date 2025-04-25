import React, { createContext, useState } from 'react'
import UserProfile from './UserProfile';
import UpdateUser from './UpdateUser';

export const Context = createContext()
 const UserProvider = ({children}) => {
    const [user, setUser] = useState("unnamed")
   
  
   return (

     <Context.Provider value={{user, setUser}} >
       <h2>UserProvider</h2>
       {children }
      </Context.Provider>
    )
}

export default UserProvider;
