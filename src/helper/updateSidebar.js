export const garageSidebar = (garageData, setSidebarState) => {
  setSidebarState(prevState => {
    return { ...prevState, garage: garageData.properties }
  })
}

export const areaSidebar = (areaData, setSidebarState) => {
  setSidebarState(prevState => {
    return { ...prevState, area: areaData.properties }
  })
}