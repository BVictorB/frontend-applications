export const formatAreas = (data) => {
  const areaData = Object.entries(data).map(([key, value]) => value)
  
  const newAreas = areaData.map((area) => {
      const areas = { 'geometry': {}, 'type': 'Feature', 'properties': {}}
      areas.geometry.type = area.location.type
      areas.geometry.coordinates = area.location.coordinates
      areas.properties.description = area.description
      areas.properties.tariffs = area.tarieven
      return areas
  })
  return newAreas
}

export const formatStreets = (data) => {
  return data.filter(e => e.geometry && e.geometry.type !== 'Point' && e.geometry.type !== 'LineString')
}