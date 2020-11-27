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

export const convertUnixStampToYear = (unix) => {
  return (new Date(unix * 1000)).getFullYear()
}

export const roundToOneDecimal = (number) => {
  return Math.round(number * 10) / 10
}

export const calculateDifference = (firstPrice, secondPrice) => {
  const difference = roundToOneDecimal(firstPrice - secondPrice)
  if (isNaN(difference)) return null
  let message
  difference > 0 ? message = 'cheaper' : message = 'more expensive'
  return `${Math.abs(difference)} ${message}`
}

export const getPaymentMethods = (sidebarState) => {
  if (sidebarState.garage.payment) {
    const paymentMethods = sidebarState.garage.payment
    const paymentMethodArray = paymentMethods.map(payment => payment.toLowerCase())
    return paymentMethodArray.join(', ')
  } else {
    return 'no data'
  }
}