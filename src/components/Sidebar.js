import { convertUnixStampToYear, roundToOneDecimal, createYearButtons } from '../helper/formatData'

function Sidebar({ sidebarState, geoGarages, setFilteredGeoGarages }) {
  const setFilter = (event) => {
    const filteredPointData = geoGarages.filter(e => e.properties && convertUnixStampToYear(e.properties.openDate) === Number(event.target.value))
    setFilteredGeoGarages(filteredPointData)
  }

  const resetFilter = () => {
    setFilteredGeoGarages(null)
  }

  return (
    <div className="m-sidebar">
      <h1>{sidebarState.garage.name}</h1>
      <p>Year of opening: {convertUnixStampToYear(sidebarState.garage.openDate)}</p>
      <p>Capacity: {sidebarState.garage.capacity}</p>
      <p>Price: {sidebarState.garage.tariff ? `€${roundToOneDecimal(sidebarState.garage.tariff * 60)}` : 'no price data'}</p>
      <h2>...</h2>
      <p>Area: {sidebarState.area.description ? sidebarState.area.description[0] : null}</p>
      <p>Price: {sidebarState.area.tariffs ? `€${Object.keys(sidebarState.area.tariffs[0])[0]}` : 'no price data'}</p>
      {createYearButtons(geoGarages, setFilter)}
      <button onClick={resetFilter}>Reset</button>
    </div>
  )
}

export default Sidebar