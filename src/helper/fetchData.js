import { json } from 'd3'
import { formatAreas, formatStreets } from './formatData'

const fetchData = (setLoaded, setGeoStreets, setGeoAreas, setGeoGarages) => {
  const streetData = 'https://gist.githubusercontent.com/BVictorB/f0859579f276725bbdd27e01b8c73fab/raw/2d3caf5e08b24df850d79479201d518f505d4777/amsterdam.geojson'
  const districtData = 'https://amsterdam-maps.bma-collective.com/embed/parkeren/deploy_data/tarieven.json'
  const garageData = 'https://gist.githubusercontent.com/BVictorB/050275288e890f7f4d0a01df1aef3cbc/raw/38c2e732a87fc11b8939d0721bb7522160fe9e09/parkingGaragesAmsterdam.json'

  json(streetData).then(data => {
    setGeoStreets(formatStreets(data.features))
    setLoaded(true)
  })

  json(districtData).then(data => {
    setGeoAreas(formatAreas(data))
  })

  json(garageData).then(data => {
    setGeoGarages(data.features)
  })
}

export default fetchData