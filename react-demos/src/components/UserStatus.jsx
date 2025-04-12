import React from 'react'
import { FaRegIdCard } from "react-icons/fa6";

const UserStatus = () => {
    // const style = {color : "white", backgroundColor: "teal", padding: "2rem"}
    return (
        <section>
            {/* <h1 style={{color : "white", backgroundColor: "teal", padding: "2rem"}}>inline style</h1> */}
            {/* <h1 style={style}>inline style</h1> */}
            <FaRegIdCard size={38} color='gold'  />
        </section>
    )
   
}

export default UserStatus