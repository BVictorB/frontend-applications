import { useState } from 'react';
import './Sidebar.css';

export default () => {
  const [state, setState] = useState(() => {
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

  const
    garageName = state.garage.name,
    garageYear = state.garage.year,
    garageCapacity = state.garage.capacity,
    areaName = state.area.name,
    areaYear = state.area.year,
    areaPrice = state.area.price

  return (
    <div className="m-sidebar">
      <h1>{garageName}</h1>
      <p>Year of opening: {garageYear}</p>
      <p>Capacity: {garageCapacity}</p>
      <h2>{areaName}</h2>
      <p>Year: {areaYear}</p>
      <p>Price: €{areaPrice}</p>
    </div>
  )
}