import { useState } from "react";
import React from 'react'

const Movie = () => {
    // const [movie, setMovie] = useState({
    //     title: "movie1",
    //     rating: 5
    // })

    // const handleChange = () => {
    //     // const copyMovies = {
    //     //     ...movie,
    //     //     rating: 9
    //     // }
    //     // setMovie(copyMovies)

    //     setMovie({...movie, rating: 9})
    // }

    const [movie, setMovie] = useState([
        { id: 0, title: "purple turtle", rating: 7 },
        {
        id: 1, title: "movie", rating: 6
        }
    ])

    const handleClick = () => {
        setMovie(movie.map(m => m.id === 1 ? {...m, title: "blue"} : m))
    }
  return (
      <div>
          {/* <h1>title: {movie.title}</h1>
          <p>rating: {movie.rating}</p>
          <button onClick={handleChange}></button> */}
          <ul>{
              movie.map((m, i) => {
                  return <li key={i}>{m.title}</li>
              })
          }
          </ul>
          <button onClick={handleClick}>change name</button>
      </div>
  )
}

export default Movie