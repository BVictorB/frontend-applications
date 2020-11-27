import { convertUnixStampToYear } from '../../../../helper/formatData'
import createYearButtons from '../../../../helper/createYearButtons'

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
      <button className="reset-button" onClick={resetFilter}>Reset</button>
    </div>
  )
}

export default FilterGarages