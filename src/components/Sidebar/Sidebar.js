import { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [state] = useState(() => {
    return {
      garage: {
        name: 'testGarage',
        year: 2020,
        capacity: 400
      },
      area: {
        name: 'testArea',
        year: 2010,
        price: 5
      }
    }
  })
  
  return (
    <div className="m-sidebar">
      <h1>{state.garage.name}</h1>
      <p>Year of opening: {state.garage.year}</p>
      <p>Capacity: {state.garage.capacity}</p>
      <h2>{state.area.name}</h2>
      <p>Year: {state.area.year}</p>
      <p>Price: €{state.area.price}</p>
    </div>
  )
}

export default Sidebar