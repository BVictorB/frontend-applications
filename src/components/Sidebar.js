function Sidebar({ sidebarState }) {
  return (
    <div className="m-sidebar">
      <h1>{sidebarState.garage.name}</h1>
      <p>Year of opening: {sidebarState.garage.openDate}</p>
      <p>Capacity: {sidebarState.garage.capacity}</p>
      <h2>...</h2>
      <p>Area: {sidebarState.area.description ? sidebarState.area.description[0] : null}</p>
    </div>
  )
}

export default Sidebar