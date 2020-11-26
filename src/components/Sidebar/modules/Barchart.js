import { removeSelectedGarage } from '../../../helper/formatData'
import { scaleBand, scaleLinear, max } from 'd3';

const Barchart = ({ selectedGarages, setSelectedGarages, chartKey, multiplier, chartName}) => {
  const width = 400
  const height = 300
  const margin = { top: 20, right: 20, bottom: 20, left: 20 }

  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right

  const yScale = scaleBand()
    .domain(selectedGarages.map(d => d.properties.name))
    .range([0, 250])

  const xScale = scaleLinear()
    .domain([0, max(selectedGarages, d => d.properties[chartKey] * multiplier)])
    .range([0, innerWidth])

  return (
    <>
      <h2>{chartName}</h2>
      <svg className="m-barchart" width={width} height={height}>
        <g className="chart" transform={`translate(${margin.left},${margin.top})`}>
          {xScale.ticks().map(tickValue => (
            <g key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
              <line y2={innerHeight} stroke='white' />
              <text
                style={{ textAnchor: 'middle' }}
                fill='white'
                dy='1em'
                y={innerHeight + 3}
              >
                {tickValue}
              </text>
            </g>
          ))}
          {selectedGarages.map((d, index) => (
            <>
              <rect className="bar" key={index} y={yScale(d.properties.name)} width={xScale(d.properties[chartKey] * multiplier)} onClick={removeSelectedGarage(d, setSelectedGarages, selectedGarages)}/>
              <svg width={xScale(d.properties[chartKey] * multiplier)}>
                <text y={yScale(d.properties.name)} className="bar-title">{d.properties.name}</text>
              </svg>
            </>
          ))}
        </g>
      </svg>
    </>
  )
}

export default Barchart