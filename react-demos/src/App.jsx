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


function App() {
  // const counter = useState(0)
  // const [counter, setCounter] = useState(55)
  // const increament = () => setCounter(counter + 1)
  // const decrement = () => setCounter(counter - 1)
  
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
      <Movie />
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