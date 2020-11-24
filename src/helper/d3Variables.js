import { geoMercator, geoPath } from 'd3'

export const 
  projection = geoMercator().scale(300000).center([4.795168,52.420216]),
  pathGenerator = geoPath().projection(projection)