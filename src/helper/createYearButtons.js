import { convertUnixStampToYear } from './formatData'

const createYearButtons = (geoGarages, setFilter) => {
  const allYears = [...new Set(geoGarages.map(geoGarage => convertUnixStampToYear(geoGarage.properties.openDate)))]
  allYears.sort((a, b) => {
    return a - b
  })
  
  return allYears.map((year, index) => {
    return <button className="filter-button" onClick={setFilter} key={index} value={year}>{year}</button>
  })
}

export default createYearButtons