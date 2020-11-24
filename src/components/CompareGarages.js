import React from 'react'

function CompareGarages({ selectedGarages, setSelectedGarages }) {
  const resetSelectedGarages = () => {
    setSelectedGarages(null)
  }

  const renderSelectedGarages = selectedGarages ? Object.values(selectedGarages) : null
  return (
    <div>
      <button onClick={resetSelectedGarages}>Reset selected garages</button>
      <p>Visualise: </p>
      {renderSelectedGarages ? renderSelectedGarages.map((garage, index) => (
        <p key={index}>{garage.name}</p>
      )) : null}
    </div>
  )
}

export default CompareGarages