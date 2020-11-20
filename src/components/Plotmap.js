import { useState, useEffect } from 'react'
import { json, geoMercator, geoPath } from 'd3'
import formatDistricts from '../helper/formatDistricts'

function Plotmap() {
  const [geoStreets, setGeoStreets] = useState(null)
  const [geoDistricts, setGeoDistricts] = useState(null)
  const [geoGarages, setGeoGarages] = useState(null)

  const streetData = 'https://gist.githubusercontent.com/BVictorB/f0859579f276725bbdd27e01b8c73fab/raw/2d3caf5e08b24df850d79479201d518f505d4777/amsterdam.geojson'
  const districtData = 'https://amsterdam-maps.bma-collective.com/embed/parkeren/deploy_data/tarieven.json'
  const garageData = 'https://gist.githubusercontent.com/BVictorB/050275288e890f7f4d0a01df1aef3cbc/raw/38c2e732a87fc11b8939d0721bb7522160fe9e09/parkingGaragesAmsterdam.json'

  useEffect(() => {
    json(streetData).then(data => {
      const streets = data.features.filter(e => e.geometry && e.geometry.type !== 'Point' && e.geometry.type !== 'LineString')
      setGeoStreets(streets)
    })

    json(districtData).then(data => {
      const districts = formatDistricts(Object.entries(data).map(([key, value]) => value))
      setGeoDistricts(districts)
    })

    json(garageData).then(data => {
      setGeoGarages(data)
    })
  }, [])

  const projection = geoMercator().scale(200000).center([4.895168,52.370216])
  const pathGenerator = geoPath().projection(projection)

  if (geoStreets && geoGarages) {
    return (
      <svg width="100%" height="100%">
        <g className="streets">
          {geoStreets.map((geoStreet, index) => (
            <path key={index} fill="none" stroke="black" className="street" d={pathGenerator(geoStreet)} />
          ))}
        </g>
        <g className="distritcs">
          {geoDistricts.map((geoDistrict, index) => (
            <path key={index} fill="none" stroke="hotpink" className="district" d={pathGenerator(geoDistrict)} />
          ))}
        </g>
        <g className="garagesTemp">
          {geoGarages.features.map((geoGarage, index) => (
            <circle key={index} fill="hotpink" className="garage" r="5" cx={projection(geoGarage.geometry.coordinates)[0]} cy={projection(geoGarage.geometry.coordinates)[1]} />
          ))}
        </g>
      </svg>
    )
  } else {
    return null
  }
  
}

export default Plotmap