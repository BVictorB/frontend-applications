import React, { useState, useEffect } from 'react'
import Garages from '../Garages/Garages'

function Map() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [garages, setGarages] = useState(null)

  useEffect(() => {
    fetch('https://npropendata.rdw.nl//parkingdata/v2')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setGarages(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (garages && garages.ParkingFacilities) {
    return <Garages garages={garages.ParkingFacilities}/>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else if (error) {
    return <div>Error: {error.message}</div>
  } else {
    return null
  }
}

export default Map