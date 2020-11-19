function Garages({ garages, setSidebarState }) {
  const updateSelectedGarage = (garage) => (e) => {
    setSidebarState(garage)
  }

  return (
      garages.map(garage => {
        if (!garage.name || !garage.name.toLowerCase().includes('(amsterdam)')) {
          return null
        } 
        return (
          <div key={garage.identifier}>
            <button onClick={updateSelectedGarage(garage)}>{garage.name}</button>
          </div>
        )
      })
  )
}

export default Garages