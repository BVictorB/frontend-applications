function Sidebar({ sidebarState }) {
  return (
    <div className="m-sidebar">
      <h1>{sidebarState.name}</h1>
      <p>Year of opening: ...</p>
      <p>Capacity: ...</p>
      <h2>...</h2>
      <p>Year: ...</p>
      <p>Price: €...</p>
    </div>
  )
}

export default Sidebar