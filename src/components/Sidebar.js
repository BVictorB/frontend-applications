function Sidebar({ sidebarState }) {
  if (sidebarState) {
    return (
      <div className="m-sidebar">
        <h1>{sidebarState.name}</h1>
        <p>Year of opening: {sidebarState.openDate}</p>
        <p>Capacity: {sidebarState.capacity}</p>
        <h2>...</h2>
        <p>Year: ...</p>
        <p>Price: €...</p>
      </div>
    )
  } else {
    return <div className="m-sidebar"></div>
  }
}

export default Sidebar