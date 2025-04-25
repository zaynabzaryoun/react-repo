import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import JSXRules from "./components/JSXRules"
import Product from "./components/Product";
import Card from "./components/Card";
import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";
import "./index.css"
import Copy from "./components/Copy";
import { useState } from "react";
import Friends from "./components/Friends";
import Movie from "./components/Movie";
import CompoenentTwo from "./components/ComponentTwo";
import ComponentOne from "./components/ComponentOne";
import ExampleOne from "./components/ExampleOne";
import ToDoList from "./components/ToDoList";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";
import CopyInput from "./components/CopyInput";
import Switcher from "./components/Switcher";
import Value from "./components/Value";
import BasicEffect from "./components/BasicEffect";
import ComponentA from "./components/propsDriling/ComponentA";
import { createContext } from "react";
import UserProvider from "./components/UserContext";
import UpdateUser from "./components/UpdateUser";
import UserProfile from "./components/UserProfile";


export const Data = createContext()
export const Data1 = createContext()
function App() {
  // const counter = useState(0)
  // const [counter, setCounter] = useState(55)
  // const increament = () => setCounter(counter + 1)
  // const decrement = () => setCounter(counter - 1)
  // const [count, setCount] = useState(0)
  const name = "zay"
  const age = 29

  
  return(
    <>
      {/* {counter} */}
      {/* <button onClick={increament}>+</button> */}
      {/* <button onClick={decrement}>-</button> */}
      {/* <Greet isValid={true} /> */}
      {/* <Greet isValid={false} /> */}
      {/* <Header />
      <MainContent />
      <JSXRules />
      <Footer />
       */}
      {/* <User
        img=""
        name="sara hh"
        age={44}
        isMarried={false}
        hobbies ={["coding", "reading", "sleeping"]}
      /> */}
      {/* <Product name="icecream" price={2} /> */}
      {/* <Product>
        <div>icecream</div>
        <div>$2</div>
      </Product> */}
      
      {/* <Card /> */}
      {/* <Weather tempareture={17} /> */}
      {/* <UserStatus /> */}
      {/* <h1>seprate file for styling</h1> */}
      {/* <Copy /> */}
      {/* <Button /> */}
      {/* <Friends /> */}
      {/* <Movie /> */}
      {/* <CompoenentTwo count={count} onClick={() => setCount(count + 1)} /> */}
      {/* <ComponentOne count={count} onClick={() => setCount(count + 1)} /> */}
      {/* <ExampleOne /> */}
      {/* <ComponentOne /> */}
      {/* <ToDoList /> */}
      {/* <Profile /> */}
      {/* <ShoppingList /> */}
      {/* <CopyInput /> */}
      {/* <Switcher /> */}
      {/* <Value/> */}
      {/* <BasicEffect /> */}
      {/* <Data.Provider value={name} >
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider> */}
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
    </>
  )
}

// const User = ({img, name, age, isMarried, hobbies}) => {
//   // console.log(;
//   return (
//     <section>
//       <img src={img} alt={name} width={age} />
//       <h4>hobbies: {hobbies}</h4>
//     </section>
//   )
        
// }

const Button = () => {
  return (<button onClick={() => console.log(Math.floor(Math.random() * 10))
  }>random number</button>)
}

export default App;