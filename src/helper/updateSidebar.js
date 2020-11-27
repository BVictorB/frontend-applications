export const garageSidebar = (garageData, setSidebarState, index) => {
  setSidebarState(prevState => {
    return { ...prevState, garage: garageData.properties, index: index }
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