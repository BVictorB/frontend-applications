import React from 'react';
import Garage from '../Garage/Garage';

function Garages({ garages }) {
  return (
      garages.map(garage => {
        if (garage.name && garage.name.toLowerCase().includes('amsterdam')) {
          return <Garage key={garage.identifier} garage={garage} />
        }
      })
  )
}

export default Garages;