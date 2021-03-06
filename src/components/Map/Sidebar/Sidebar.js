import './sidebar.css'
import { convertUnixStampToYear, roundToOneDecimal, calculateDifference, getPaymentMethods } from '../../../helper/formatData'
import { resetSelectedGarages, addSelectedGarage } from '../../../helper/selectedGarage'
import FilterGarages from './FilterGarages/FilterGarages'
import Barchart from './Barchart/Barchart'

const Sidebar = ({ sidebarState, geoGarages, setFilteredGeoGarages, selectedGarages, setSelectedGarages}) => {
  const garagePrice = sidebarState.garage.tariff ? roundToOneDecimal(sidebarState.garage.tariff * 60) : 'no price data'
  const areaPrice = sidebarState.area.tariffs ? Number(Object.keys(sidebarState.area.tariffs[0])[0].replace(/,/g, '.')) : 'no price data'

  const checkIfGarageIsSelected = () => {
    if (sidebarState.garage.name) {
      return (
        <>
          <h2>Garage:</h2>
          <p>{sidebarState.garage.name}</p>
          <p>Year of opening: {convertUnixStampToYear(sidebarState.garage.openDate)}</p>
          <p>Capacity: {sidebarState.garage.capacity}</p>
          <p>Price: {typeof garagePrice === 'string' ? garagePrice : `€${garagePrice}`}</p>
          <p className="payment-methods">Payment methods: {getPaymentMethods(sidebarState)}</p>
        </>
      )
    } else {
      return (
          <h2>Select a parking garage</h2>
      )
    }
  }

  const checkIfAreaIsSelected = () => {
    if (sidebarState.area.description) {
      return (
        <>
          <h2>Area:</h2>
          <p>{sidebarState.area.description ? sidebarState.area.description[0] : null}</p>
          <p>Price: €{areaPrice}</p>
        </>
      )
    } else {
      return (
          <h2>Select an area</h2>
      )
    }
  }

  const checkIfBarchartGaragesAreSelected = () => {
    if (selectedGarages[0]) {
      return (
        <div className="sidebar-compare">
          <button onClick={() => addSelectedGarage(setSelectedGarages, sidebarState.garage, sidebarState.index)}>Compare selected garage</button>
          <button onClick={resetSelectedGarages(setSelectedGarages)}>Clear all selected garages</button>
          <Barchart selectedGarages={selectedGarages} setSelectedGarages={setSelectedGarages} chartKey={'tariff'} multiplier={60} chartName={'Prices'}/>
          <Barchart selectedGarages={selectedGarages} setSelectedGarages={setSelectedGarages} chartKey={'capacity'} multiplier={1} chartName={'Capacity'}/>
        </div>
      ) 
    } else {
      return (
        <div className="sidebar-compare">
          <button onClick={() => addSelectedGarage(setSelectedGarages, sidebarState.garage, sidebarState.index)}>Compare selected garage</button>
        </div>
      )
    }
  }

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        {checkIfGarageIsSelected()}
        {checkIfAreaIsSelected()}
        {calculateDifference(areaPrice, garagePrice) ? <p className="sidebar-pricedif">This parking garage is €{calculateDifference(areaPrice, garagePrice)} compared to the area price.</p> : null}
      </div>
      <div className="sidebar-filter">
        <h2 className="filter-text">Filter on year of opening:</h2>
        <FilterGarages setFilteredGeoGarages={setFilteredGeoGarages} geoGarages={geoGarages}/>
      </div>
      {checkIfBarchartGaragesAreSelected()}
    </div>
  )
}

export default Sidebar