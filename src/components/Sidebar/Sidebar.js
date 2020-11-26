import { convertUnixStampToYear, roundToOneDecimal, calculateDifference } from '../../helper/formatData'
import CompareGarages from './modules/CompareGarages'
import FilterGarages from './modules/FilterGarages'

const Sidebar = ({ sidebarState, geoGarages, setFilteredGeoGarages, selectedGarages, setSelectedGarages}) => {
  // const findPaymentMethods = () => {
  //   const paymentMethods = sidebarState.garage.payment
  //   console.log(paymentMethods)
  //   return paymentMethods.map((method, index) => {
  //     return <img src={method.toLowerCase()} key={index} alt=""/>
  //   })
  // }

  const garagePrice = sidebarState.garage.tariff ? roundToOneDecimal(sidebarState.garage.tariff * 60) : 'no price data'
  const areaPrice = sidebarState.area.tariffs ? Number(Object.keys(sidebarState.area.tariffs[0])[0].replace(/,/g, '.')) : 'no price data'

  return (
    <div className="sidebar">
      {/* {findPaymentMethods()} */}
      <div className="sidebar-garage">
        <h2>{sidebarState.garage.name}</h2>
        <p>Year of opening: {convertUnixStampToYear(sidebarState.garage.openDate)}</p>
        <p>Capacity: {sidebarState.garage.capacity}</p>
        <p>Price: €{garagePrice}</p>
      </div>
      <div className="sidebar-area">
        <p>Area: {sidebarState.area.description ? sidebarState.area.description[0] : null}</p>
        <p>Price: €{areaPrice}</p>
      </div>
      <div className="sidebar-charts">
        <FilterGarages setFilteredGeoGarages={setFilteredGeoGarages} geoGarages={geoGarages}/>
        {calculateDifference(areaPrice, garagePrice) ? <p>This parking garage is €{calculateDifference(areaPrice, garagePrice)} compared to the area price.</p> : null}
        <CompareGarages selectedGarages={selectedGarages} setSelectedGarages={setSelectedGarages}/>
      </div>
    </div>
  )
}

export default Sidebar