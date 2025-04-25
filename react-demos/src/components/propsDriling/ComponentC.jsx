import React from 'react'
import { useContext } from 'react'
import { Data } from '../../App'
import { Data1 } from '../../App'

const ComponentC = () => {
    const userName = useContext(Data)
    const userAge = useContext(Data1)
  return (
    //   <Data.Consumer>
    //       {(name) => {
    //           return (
    //               <Data1.Consumer>
    //                   {(age) => { return (<h1>my name is {name} and im {age} years old.</h1>) }}
    //               </Data1.Consumer>
    //           )
    //       }}
      // </Data.Consumer>
      <h1>my name is {userName} im {userAge} years old</h1>
  )
}

export default ComponentC