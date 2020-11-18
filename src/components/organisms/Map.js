import React, { useState, useEffect } from 'react'
import Garages from '../molecules/Garages'
import Sidebar from '../molecules/Sidebar'

function Map() {
  const [error, setError] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [garages, setGarages] = useState(null)
  const [sidebarState, setSidebarState] = useState([])

  useEffect(() => {
    fetch('https://npropendata.rdw.nl//parkingdata/v2')
      .then(res => res.json())
      .then(
        (result) => {
          setLoaded(true)
          setGarages(result)
        },
        (error) => {
          setLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (garages && garages.ParkingFacilities) {
    return (
      <>
        <Garages setSidebarState={setSidebarState} garages={garages.ParkingFacilities}/>
        <Sidebar sidebarState={sidebarState}/>
      </>
    )
  } else if (!loaded) {
    return <div>Loading...</div>
  } else if (error) {
    return <div>Error: {error.message}</div>
  } else {
    return null
  }
}

export default Map