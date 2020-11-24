import { useRef } from 'react'
import { select, zoom } from 'd3'
import { projection, pathGenerator } from '../helper/d3Variables'
import { garageSidebar, areaSidebar } from '../helper/updateSidebar'

function Plotmap({ setSidebarState, geoAreas, geoGarages, geoStreets, filteredGeoGarages, setSelectedGarages }) {
  const 
    svgEl = useRef(null),
    svgGroup = useRef(null),
    svg = select(svgEl.current),
    group = select(svgGroup.current)

  svg.call(zoom().on('zoom', (e) => {
    group.attr('transform', e.transform)
  }))

  let geoGaragePlot

  filteredGeoGarages ? geoGaragePlot = filteredGeoGarages : geoGaragePlot = geoGarages

  if (geoStreets && geoGarages && geoAreas) {
    return (
      <svg ref={svgEl} width="100%" height="100%">
        <g className="group" ref={svgGroup}>
          <g className="streets">
            {geoStreets.map((geoStreet, index) => (
              <path key={index} className="street" d={pathGenerator(geoStreet)} />
            ))}
          </g>
          <g className="areas">
            {geoAreas.map((geoArea, index) => (
              <path onClick={(e) => areaSidebar(geoArea, setSidebarState, e)} key={index} className="area" d={pathGenerator(geoArea)} />
            ))}
          </g>
          <g className="garages">
            {geoGaragePlot.map((geoGarage, index) => (
              <circle onClick={() => garageSidebar(geoGarage, setSidebarState, setSelectedGarages, index)} key={index} className="garage" r="6" cx={projection(geoGarage.geometry.coordinates)[0]} cy={projection(geoGarage.geometry.coordinates)[1]} />
            ))}
          </g>
        </g>
      </svg>
    )
  } else {
    return null
  }
  
}

export default Plotmap