import { useRef } from 'react'
import { select, zoom } from 'd3'
import { projection, pathGenerator } from '../helper/d3Variables'
import { garageSidebar, areaSidebar } from '../helper/updateSidebar'

function Plotmap({ setSidebarState, geoAreas, geoGarages, geoStreets }) {
  const svgEl = useRef(null)
  const svgStreets = useRef(null)
  const svgAreas = useRef(null)
  const svgGarages = useRef(null)

  const svg = select(svgEl.current)
  const streets = select(svgStreets.current)
  const areas = select(svgAreas.current)
  const garages = select(svgGarages.current)

  svg.call(zoom().on('zoom', (e) => {
    streets.attr('transform', e.transform)
    areas.attr('transform', e.transform)
    garages.attr('transform', e.transform)
  }))

  if (geoStreets && geoGarages) {
    return (
      <svg ref={svgEl} width="100%" height="100%">
        <g className="streets" ref={svgStreets}>
          {geoStreets.map((geoStreet, index) => (
            <path key={index} className="street" d={pathGenerator(geoStreet)} />
          ))}
        </g>
        <g className="areas" ref={svgAreas}>
          {geoAreas.map((geoArea, index) => (
            <path onClick={areaSidebar(geoArea.properties, setSidebarState)} key={index} className="area" d={pathGenerator(geoArea)} />
          ))}
        </g>
        <g className="garages" ref={svgGarages}>
          {geoGarages.features.map((geoGarage, index) => (
            <circle onClick={garageSidebar(geoGarage.properties, setSidebarState)} key={index} className="garage" r="10" cx={projection(geoGarage.geometry.coordinates)[0]} cy={projection(geoGarage.geometry.coordinates)[1]} />
          ))}
        </g>
      </svg>
    )
  } else {
    return null
  }
  
}

export default Plotmap