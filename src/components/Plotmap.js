import { useState, useEffect } from 'react'
import { json, geoMercator, geoPath } from 'd3'

function Plotmap() {
  const [geoStreets, setGeoStreets] = useState(null)

  const url = 'https://gist.githubusercontent.com/BVictorB/f0859579f276725bbdd27e01b8c73fab/raw/2d3caf5e08b24df850d79479201d518f505d4777/amsterdam.geojson'

  useEffect(() => {
    json(url).then(streets => {
      setGeoStreets(streets)
    })
  }, [])

  const projection = geoMercator().scale(200000).center([4.895168,52.370216])
  const pathGenerator = geoPath().projection(projection)

  if (geoStreets) {
    return (
      <svg width="100%" height="100%">
        <g className="streets">
          {geoStreets.features.map((feature, index) => (
            <path key={index} fill="none" stroke="black" className="street" d={pathGenerator(feature)} />
          ))}
        </g>
      </svg>
    )
  } else {
    return null
  }
  
}

export default Plotmap