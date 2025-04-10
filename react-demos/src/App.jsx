import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import JSXRules from "./components/JSXRules"
function App() {
  return(
    <>
      <Greet />
      {/* <Header />
      <MainContent />
      <JSXRules />
      <Footer />
       */}
      <User
        img=""
        name="sara hh"
        age={44}
        isMarried={false}
        hobbies ={["coding", "reading", "sleeping"]}
      />

      
    </>
  )
}

const User = (props) => {
  // console.log(props);
  return (
    <section>
      <img src={props.img} alt={props.name} width={props.age} />
    </section>
  )
        
}

export default App;