import React from 'react'

const Copy = () => {
    const copyHandler = () => {
        console.log("stop copying my contents!");
        
    }
  return (
    <div onCopy={copyHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione distinctio quam ab corrupti facere, animi magni harum consequatur nobis rem corporis et adipisci, voluptatem esse dolore omnis iusto similique modi.</div>
  )
}

export default Copy