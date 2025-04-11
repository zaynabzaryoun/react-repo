import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import JSXRules from "./components/JSXRules"
import Product from "./components/Product";
import Card from "./components/Card";
import Weather from "./components/Weather";
function App() {
  return(
    <>
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
      <Weather tempareture={17} />
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

export default App;