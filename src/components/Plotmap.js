import { useState, useRef } from 'react'
import { select, zoom } from 'd3'
import { projection, pathGenerator } from '../helper/d3Variables'
import { garageSidebar, areaSidebar } from '../helper/updateSidebar'

function Plotmap({ setSidebarState, geoAreas, geoGarages, geoStreets, filteredGeoGarages, setLoaded }) {
  const 
    svgEl = useRef(null),
    svgGroup = useRef(null),
    svg = select(svgEl.current),
    group = select(svgGroup.current)

  svg.call(zoom().on('zoom', (e) => {
    changeZoom(e.transform)
  }))

  const changeZoom = (zoomSettings) => {
    group.attr('transform', zoomSettings)
  }

  const selectArea = (geoArea) => {
    const areaCentroid = pathGenerator.centroid(geoArea)
    // const zoomSettings = {
    //   'Transform': {
    //     'k': 2,
    //     'x': areaCentroid[0],
    //     'y': areaCentroid[1]
    //   }
    // }
    // console.dir(zoomSettings)
    // // changeZoom(zoomSettings)
  }

  // console.log(selectedArea)

  // if (selectedArea) {
  //   group.attr('transform', `scale(3)translate(-${selectedArea[0]},-${selectedArea[1]})`)
  // }


  let geoGaragePlot = geoGarages

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
              <path onClick={() => { selectArea(geoArea); areaSidebar(geoArea, setSidebarState) }} key={index} className="area" d={pathGenerator(geoArea)} />
            ))}
          </g>
          <g className="garages">
            {geoGaragePlot.map((geoGarage, index) => (
              <circle onClick={() => garageSidebar(geoGarage, setSidebarState)} key={index} className="garage" r="10" cx={projection(geoGarage.geometry.coordinates)[0]} cy={projection(geoGarage.geometry.coordinates)[1]} />
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