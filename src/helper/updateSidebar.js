export const garageSidebar = (garageData, setSidebarState) => (e) => {
  setSidebarState(prevState => {
    return { ...prevState, garage: garageData }
  })
}

export const areaSidebar = (areaData, setSidebarState) => (e) => {
  setSidebarState(prevState => {
    return { ...prevState, area: areaData }
  })
}