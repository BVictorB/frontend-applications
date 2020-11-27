export const resetSelectedGarages = (setSelectedGarages) => () => {
  setSelectedGarages([])
}

export const removeSelectedGarage = (garage, setSelectedGarages, selectedGarages) => () => {
  setSelectedGarages(selectedGarages.filter((garages) => {
    return garages.index !== garage.index
  }))
}

export const addSelectedGarage = (setSelectedGarages, garageData, index) => {
  setSelectedGarages(prevState => {
    if (prevState.length <= 3) {
      return [ ...prevState, { ...garageData, index: index } ]
    } else {
      return prevState
    }
  })
}