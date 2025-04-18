import React from 'react'

function ComponentTwo({count, onClick}) {
    return (
        <>
            <p>{count}</p>
            <button onClick={onClick}>increment</button>
        </>
    )
}

export default ComponentTwo;