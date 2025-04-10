function Greet() {
    let name = "john"
    let currectDate = new Date().getDate()
    console.log(new Date().getDate());
    
    
    return(
        <div>
            <h1>hello {name}</h1>
            <p>{currectDate}</p>
        </div>
    )
}

export default Greet;