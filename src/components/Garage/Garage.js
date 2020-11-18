import React from 'react'

function Garage({ garage }) {
  const testFunc = (garageData) => (e) => {
    console.log(e)
    console.log(garageData)
}
  return (
    <div>
      <h1 onClick={testFunc(garage)}>{garage.name}</h1>
    </div>
  )
}

export default Garage