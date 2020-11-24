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

export const createYearButtons = (geoGarages, setFilter) => {
  const allYears = [...new Set(geoGarages.map(geoGarage => convertUnixStampToYear(geoGarage.properties.openDate)))]
  allYears.sort((a, b) => {
    return a - b
  })
  
  return allYears.map((year, index) => {
    return <button onClick={setFilter} key={index} value={year}>{year}</button>
  })
}

export const convertUnixStampToYear = (unix) => {
  return (new Date(unix * 1000)).getFullYear()
}

export const roundToOneDecimal = (number) => {
  return Math.round(number * 10) / 10
}