import { convertUnixStampToYear, createYearButtons } from '../../../helper/formatData'

const FilterGarages = ({ setFilteredGeoGarages, geoGarages }) => {
  const setFilter = (event) => {
    const filteredPointData = geoGarages.filter(e => e.properties && convertUnixStampToYear(e.properties.openDate) === Number(event.target.value))
    setFilteredGeoGarages(filteredPointData)
  }

  const resetFilter = () => {
    setFilteredGeoGarages(null)
  }
  return (
    <div>
      {geoGarages ? createYearButtons(geoGarages, setFilter) : null}
      <button onClick={resetFilter}>Reset</button>
    </div>
  )
}

export default FilterGarages