import { convertUnixStampToYear } from '../helper/formatData'

function Sidebar({ sidebarState, geoGarages, setFilteredGeoGarages }) {
  const buttonFunc = (event) => {
    const filteredPointData = geoGarages.filter(e => e.properties && convertUnixStampToYear(e.properties.openDate) === Number(event.target.value))
    setFilteredGeoGarages(filteredPointData)
  }

  const resetFunc = () => {
    setFilteredGeoGarages(null)
  }

  return (
    <div className="m-sidebar">
      <h1>{sidebarState.garage.name}</h1>
      <p>Year of opening: {convertUnixStampToYear(sidebarState.garage.openDate)}</p>
      <p>Capacity: {sidebarState.garage.capacity}</p>
      <h2>...</h2>
      <p>Area: {sidebarState.area.description ? sidebarState.area.description[0] : null}</p>
      <button onClick={buttonFunc} value="2013" >2013</button>
      <button onClick={buttonFunc} value="2014" >2014</button>
      <button onClick={buttonFunc} value="2015" >2015</button>
      <button onClick={buttonFunc} value="2016" >2016</button>
      <button onClick={resetFunc}>Reset</button>
    </div>
  )
}

export default Sidebar