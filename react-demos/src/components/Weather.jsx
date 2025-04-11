import React from 'react'

const Weather = ({tempareture}) => {
    if (tempareture < 15) {
        return <p>its cold</p>
    } else if (tempareture > 15 && tempareture < 25) {
        return <p>its nice</p>
    } else {
        return <p>it is hot</p>
    }
 
}

export default Weather