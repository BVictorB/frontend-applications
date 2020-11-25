import { resetSelectedGarages, removeSelectedGarage } from '../../../helper/formatData'
import Barchart from './Barchart';

const CompareGarages = ({ selectedGarages, setSelectedGarages }) => {

  return (
    <div>
      <p>Visualise: </p>
      <button onClick={resetSelectedGarages(setSelectedGarages)}>Clear all selected garages</button>
      {selectedGarages ? selectedGarages.map((garage, index) => (
        <div key={index}>
          <p>{garage.properties.name}</p>
          <button onClick={removeSelectedGarage(garage, setSelectedGarages, selectedGarages)}>Remove</button>
        </div>
      )) : null}
      <Barchart selectedGarages={selectedGarages} setSelectedGarages={setSelectedGarages}/>
    </div>
  )
}

export default CompareGarages