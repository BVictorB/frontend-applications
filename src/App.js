import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Plotmap from './components/Plotmap'
import Loading from './components/Loading'
import FetchData from './components/FetchData'

function App() {
  const [sidebarState, setSidebarState] = useState({ garage: {}, area: {} })
  const [error, setError] = useState(null)
  const [loaded, setLoaded] = useState(false)

  const [geoStreets, setGeoStreets] = useState(null)
  const [geoAreas, setGeoAreas] = useState(null)
  const [geoGarages, setGeoGarages] = useState(null)

  return (
    <>
      <Loading loaded={loaded}/>
      <Sidebar sidebarState={sidebarState}/>
      <Plotmap setSidebarState={setSidebarState} geoAreas={geoAreas} geoGarages={geoGarages} geoStreets={geoStreets}/>
      <FetchData setLoaded={setLoaded} setGeoAreas={setGeoAreas} setGeoGarages={setGeoGarages} setGeoStreets={setGeoStreets}/>
    </>
  )
}

export default App