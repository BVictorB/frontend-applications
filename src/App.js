import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Plotmap from './components/Plotmap'
import Loading from './components/Loading'
import fetchData from './helper/fetchData'

function App() {
  const [sidebarState, setSidebarState] = useState({ garage: {}, area: {} })
  const [error, setError] = useState(null)
  const [loaded, setLoaded] = useState(false)

  const [geoStreets, setGeoStreets] = useState(null)
  const [geoAreas, setGeoAreas] = useState(null)
  const [geoGarages, setGeoGarages] = useState(null)
  const [filteredGeoGarages, setFilteredGeoGarages] = useState(null)

  useEffect(() => {
    fetchData(setLoaded, setGeoStreets, setGeoAreas, setGeoGarages)
  }, [])

  return (
    <>
      <Loading loaded={loaded}/>
      <Sidebar sidebarState={sidebarState} geoGarages={geoGarages} setFilteredGeoGarages={setFilteredGeoGarages}/>
      <Plotmap setSidebarState={setSidebarState} geoAreas={geoAreas} geoGarages={geoGarages} geoStreets={geoStreets} filteredGeoGarages={filteredGeoGarages}/>
    </>
  )
}

export default App