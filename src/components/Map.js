import { useState, useEffect } from 'react'
import Garages from './Garages'
import Sidebar from './Sidebar'
import fetchData from '../helper/fetchData'

function Map({ sidebarState }) {
  const [error, setError] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [garages, setGarages] = useState(null)

  useEffect(() => {
    fetchData('https://npropendata.rdw.nl//parkingdata/v2', true)
      .then(
        (data) => {
          setLoaded(true)
          setGarages(data)
        },
        (err) => {
          setLoaded(true)
          setError(err)
        }
      )
  }, [])

  if (garages && garages.ParkingFacilities) {
    return (
      <>
        {/* <Garages setSidebarState={setSidebarState} garages={garages.ParkingFacilities}/> */}
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