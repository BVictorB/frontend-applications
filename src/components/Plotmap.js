import { useState, useEffect, useRef } from 'react'
import { json, geoMercator, geoPath, select, zoom } from 'd3'
import formatDistricts from '../helper/formatDistricts'

function Plotmap({ setSidebarState }) {
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

  const projection = geoMercator().scale(300000).center([4.895168,52.370216])
  const pathGenerator = geoPath().projection(projection)

  const garageSidebar = (garageData) => (e) => {
    setSidebarState(garageData)
  }
  const inputEl = useRef(null)
  const svgStreets = useRef(null)
  const svgDistricts = useRef(null)
  const svgGarages = useRef(null)

  const svg = select(inputEl.current)
  const streets = select(svgStreets.current)
  const districts = select(svgDistricts.current)
  const garages = select(svgGarages.current)

  svg.call(zoom().on('zoom', (e) => {
    streets.attr('transform', e.transform)
    districts.attr('transform', e.transform)
    garages.attr('transform', e.transform)
  }))

  if (geoStreets && geoGarages) {
    return (
      <svg ref={inputEl} width="100%" height="100%">
        <g className="streets" ref={svgStreets}>
          {geoStreets.map((geoStreet, index) => (
            <path key={index} className="street" d={pathGenerator(geoStreet)} />
          ))}
        </g>
        <g className="distritcs" ref={svgDistricts}>
          {geoDistricts.map((geoDistrict, index) => (
            <path key={index} className="district" d={pathGenerator(geoDistrict)} />
          ))}
        </g>
        <g className="garages" ref={svgGarages}>
          {geoGarages.features.map((geoGarage, index) => (
            <circle onClick={garageSidebar(geoGarage.properties)} key={index} className="garage" r="10" cx={projection(geoGarage.geometry.coordinates)[0]} cy={projection(geoGarage.geometry.coordinates)[1]} />
          ))}
        </g>
      </svg>
    )
  } else {
    return null
  }
  
}

export default Plotmap