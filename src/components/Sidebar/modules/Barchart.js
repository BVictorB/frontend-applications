import { removeSelectedGarage } from '../../../helper/formatData'
import { scaleBand, scaleLinear, max } from 'd3';

const Barchart = ({ selectedGarages, setSelectedGarages }) => {
  const width = 400;
  const height = 300;
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yScale = scaleBand()
    .domain(selectedGarages.map(d => d.properties.name))
    .range([0, 250]);

  const xScale = scaleLinear()
    .domain([0, max(selectedGarages, d => d.properties.tariff * 60)])
    .range([0, innerWidth]);

  return (
      <svg className="m-barchart" width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
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
            <rect
              className="bar"
              key={index}
              x={0}
              y={yScale(d.properties.name)}
              width={xScale(d.properties.tariff * 60)}
              height={yScale.bandwidth()}
              onClick={removeSelectedGarage(d, setSelectedGarages, selectedGarages)}
            />
          ))}
        </g>
      </svg>
  )
}

export default Barchart