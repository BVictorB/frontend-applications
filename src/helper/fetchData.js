import { json } from 'd3'
import { formatAreas, formatStreets } from './formatData'

const fetchData = (setLoaded, setGeoStreets, setGeoAreas, setGeoGarages, geoStreets, geoAreas, geoGarages) => {
  const streetData = 'https://gist.githubusercontent.com/BVictorB/f0859579f276725bbdd27e01b8c73fab/raw/2d3caf5e08b24df850d79479201d518f505d4777/amsterdam.geojson'
  const districtData = 'https://amsterdam-maps.bma-collective.com/embed/parkeren/deploy_data/tarieven.json'
  const garageData = 'https://gist.githubusercontent.com/BVictorB/050275288e890f7f4d0a01df1aef3cbc/raw/24a4c3e6bea356f25cd835ca0933681140db64e5/parkingGaragesAmsterdam.json'
  
  if (!geoStreets) {
    json(streetData).then(data => {
      setGeoStreets(formatStreets(data.features))
    })
  }

  if (!geoAreas) {
    json(districtData).then(data => {
      setGeoAreas(formatAreas(data))
    })
  }

  if (!geoGarages) {
    json(garageData).then(data => {
      setGeoGarages(data.features)
    })
  }
}

export default fetchData