import { geoMercator, geoPath } from 'd3'

export const 
  projection = geoMercator().scale(300000).center([4.895168,52.370216]),
  pathGenerator = geoPath().projection(projection)