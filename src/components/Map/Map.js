import { useState, useEffect } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Plotmap from './Plotmap/Plotmap'
import Loading from '../Loading/Loading'
import fetchData from '../../helper/fetchData'
import checkLocalStorage from '../../helper/checkLocalStorage'

const Map = () => {
  const 
    [sidebarState, setSidebarState] = useState(checkLocalStorage('sidebarState', { garage: {}, area: {} })),
    [loaded, setLoaded] = useState(false),
    [geoStreets, setGeoStreets] = useState(checkLocalStorage('geoStreets')),
    [geoAreas, setGeoAreas] = useState(checkLocalStorage('geoAreas')),
    [geoGarages, setGeoGarages] = useState(checkLocalStorage('geoGarages')),
    [filteredGeoGarages, setFilteredGeoGarages] = useState(checkLocalStorage('filteredGeoGarages')),
    [selectedGarages, setSelectedGarages] = useState(checkLocalStorage('selectedGarages', []))
  
    // Make this cleaner!!
  useEffect(() => {
    localStorage.setItem('sidebarState', JSON.stringify(sidebarState))
  }, [sidebarState])

  useEffect(() => {
    localStorage.setItem('filteredGeoGarages', JSON.stringify(filteredGeoGarages))
  }, [filteredGeoGarages])

  useEffect(() => {
    localStorage.setItem('geoStreets', JSON.stringify(geoStreets))
  }, [geoStreets])

  useEffect(() => {
    localStorage.setItem('geoAreas', JSON.stringify(geoAreas))
  }, [geoAreas])

  useEffect(() => {
    localStorage.setItem('geoGarages', JSON.stringify(geoGarages))
  }, [geoGarages])

  useEffect(() => {
    localStorage.setItem('filteredGeoGarages', JSON.stringify(filteredGeoGarages))
  }, [filteredGeoGarages])

  useEffect(() => {
    localStorage.setItem('selectedGarages', JSON.stringify(selectedGarages))
  }, [selectedGarages])

  useEffect(() => {
    fetchData(setLoaded, setGeoStreets, setGeoAreas, setGeoGarages, geoStreets, geoAreas, geoGarages)
    setLoaded(true)
  }, [])

  return (
    <>
      <Loading loaded={loaded}/>
      <Sidebar sidebarState={sidebarState} geoGarages={geoGarages} setFilteredGeoGarages={setFilteredGeoGarages} selectedGarages={selectedGarages} setSelectedGarages={setSelectedGarages}/>
      <Plotmap setSidebarState={setSidebarState} geoAreas={geoAreas} geoGarages={geoGarages} geoStreets={geoStreets} filteredGeoGarages={filteredGeoGarages} setSelectedGarages={setSelectedGarages}/>
    </>
  )
}

export default Map