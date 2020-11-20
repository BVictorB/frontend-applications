const formatDistricts = (districtData) => {
  const districts = districtData.map((district) => {
      const districts = { 'geometry': {}, 'type': 'Feature', 'properties': {}}
      districts.geometry.type = district.location.type
      districts.geometry.coordinates = district.location.coordinates
      districts.properties.description = district.description
      districts.properties.tariffs = district.tarieven
      return districts
  })
  return districts
}

export default formatDistricts