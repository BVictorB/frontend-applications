import { resetSelectedGarages } from '../../../helper/formatData'
import Barchart from './Barchart';

const CompareGarages = ({ selectedGarages, setSelectedGarages }) => {
  return (
    <div>
      <button onClick={resetSelectedGarages(setSelectedGarages)}>Clear all selected garages</button>
      <Barchart selectedGarages={selectedGarages} setSelectedGarages={setSelectedGarages} chartKey={'tariff'} multiplier={60} chartName={'Prices'}/>
      <Barchart selectedGarages={selectedGarages} setSelectedGarages={setSelectedGarages} chartKey={'capacity'} multiplier={1} chartName={'Capacity'}/>
    </div>
  )
}

export default CompareGarages