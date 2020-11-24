import { convertUnixStampToYear, roundToOneDecimal, createYearButtons } from '../helper/formatData'
import CompareGarages from './CompareGarages'

function Sidebar({ sidebarState, geoGarages, setFilteredGeoGarages, selectedGarages, setSelectedGarages}) {
  const setFilter = (event) => {
    const filteredPointData = geoGarages.filter(e => e.properties && convertUnixStampToYear(e.properties.openDate) === Number(event.target.value))
    setFilteredGeoGarages(filteredPointData)
  }

  const resetFilter = () => {
    setFilteredGeoGarages(null)
  }

  const calculateDifference = () => {
    const difference = roundToOneDecimal(areaPrice - garagePrice)
    if (isNaN(difference)) return null
    let message
    difference > 0 ? message = 'cheaper' : message = 'more expensive'
    return `${Math.abs(difference)} ${message}`
  }

  const garagePrice = sidebarState.garage.tariff ? roundToOneDecimal(sidebarState.garage.tariff * 60) : 'no price data'
  const areaPrice = sidebarState.area.tariffs ? Number(Object.keys(sidebarState.area.tariffs[0])[0].replace(/,/g, '.')) : 'no price data'

  return (
    <div className="m-sidebar">
      <h1>{sidebarState.garage.name}</h1>
      <p>Year of opening: {convertUnixStampToYear(sidebarState.garage.openDate)}</p>
      <p>Capacity: {sidebarState.garage.capacity}</p>
      <p>Price: €{garagePrice}</p>
      <h2>...</h2>
      <p>Area: {sidebarState.area.description ? sidebarState.area.description[0] : null}</p>
      <p>Price: €{areaPrice}</p>
      {geoGarages ? createYearButtons(geoGarages, setFilter) : null}
      <button onClick={resetFilter}>Reset</button>
      {calculateDifference() ? <p>This parking garage is €{calculateDifference()} compared to the area price.</p> : null}
      <CompareGarages selectedGarages={selectedGarages} setSelectedGarages={selectedGarages}/>
    </div>
  )
}

export default Sidebar