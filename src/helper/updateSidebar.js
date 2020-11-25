export const garageSidebar = (garageData, setSidebarState, setSelectedGarages, index) => {
  setSidebarState(prevState => {
    return { ...prevState, garage: garageData.properties }
  })

  setSelectedGarages(prevState => {
    if (prevState.length <= 3) {
      return [ ...prevState, { ...garageData, index: index } ]
    } else {
      return prevState
    }
  })
}

export const areaSidebar = (areaData, setSidebarState, e) => {
  setSidebarState(prevState => {
    return { ...prevState, area: areaData.properties }
  })

  const selectedAreas = document.querySelectorAll('.selected')
  selectedAreas.forEach(selectedArea => selectedArea.classList.remove('selected'))
  e.target.classList.add('selected')
}