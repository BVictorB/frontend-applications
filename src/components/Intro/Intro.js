import './intro.css'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div className="intro-container">
      <h1>Parking in Amsterdam</h1>
      <p>Parking in Amsterdam keeps getting more difficult and expensive. The parking prices have almost doubled in the last ten years in most areas.  I created this data visualization to find out how much cheaper/expensive parking areas are in Amsterdam compared to parking garages. </p>
      <p>You can use the sidebar to get more information about the parking garage or area when clicking on it on the map. It will also calculate the price difference.</p>
      <p>When you click on multiple parking garages on the map, you can also compare them with each other in the sidebar. You can use the clear button to get rid of all of them, or click on a single bar in the bar chart and get rid of that specific parking garage.</p>
      <p>Click on the button below to go to the data visualization!</p>
      <Link to='/map'>
        <button className="intro-button">Go to map</button>
        <svg class="car" viewBox="0 0 327.69 171.56">
        <g id="layer1" stroke-linejoin="round" transform="translate(-119.94 -468.17)" stroke="#17252A" stroke-linecap="round" fill="#3AAFA9">
          <path d="m436.55 595.21 9.6427 3.5064 0.43831 16.656h-8.3278z" stroke-width="2"/>
          <path d="m134.53 594.77-12.711 6.1362-0.87661 14.902 12.711 0.4383z" stroke-width="2"/>
          <path d="m144.24 550.41c7.8096-10.791 46.023-13.804 68.673-20.059 6.1914-18.174 14.285-35.471 22.081-53.645 15.026-6.716 74.407-12.185 118.97-1.5578 13.492 17.271 22.989 33.093 30.95 54.513 13.168 1.7064 25.831 5.8573 34.016 9.6962 14.993 17.344 17.635 48.596 20.221 76.789l-310.23 0.35637c2.0149-21.685-1.2944-45.285 15.326-66.093z" stroke-width="2"/>
          <path d="m300.24 535.6v70.554l56.541 0.0131c0.65222-17.275 6.9786-29.391 24.107-38.083l-3.2497-35.84c-7.7154-21.062-19.103-36.53-28.746-51.87-18.154-3.0434-32.017-4.5424-48.871-4.1639z"/>
          <path d="m219.15 535.16c-3.4663 20.982-5.7015 43.553-2.8425 71.005h76.916l1.7532-130.18c-16.677 0.10525-36.348 0.94215-54.788 5.2596z"/>
          <path d="m244.64 485.91-17.164 46.181 60.294-0.36743 1.2878-49.404c-16.285-0.36291-34.548 1.6038-44.417 3.5904z"/>
          <path d="m304.9 482.49 0.38037 48.946 63.992-0.59226c-5.1412-17.014-17.825-33.622-25.787-45.732-16.005-2.1813-25.248-2.4244-38.586-2.6217z"/>
          <path d="m205.95 606.31c1.2127 20.416-22.046 38.548-41.77 30.386-19.747-6.8865-27.487-33.771-14.457-49.905 9.3854-13.138 29.779-17.145 42.791-6.8625 8.3495 6.0478 13.758 16.101 13.436 26.381z" stroke-width="2"/>
          <path d="m191.96 606.6c0.66268 11.165-12.047 21.082-22.825 16.618-10.791-3.7662-15.02-18.469-7.9-27.292 5.1287-7.1852 16.273-9.3761 23.383-3.753 4.5626 3.3074 7.5183 8.8054 7.342 14.427z"/>
          <path d="m429.34 605.99c0.59627 18.291-16.827 34.856-35.164 32.522-16.407-1.3161-29.94-16.638-29.157-33.093-0.16516-16.776 14.434-32.032 31.312-32.051 17.866-0.87598 33.373 14.922 33.009 32.622z" stroke-width="2"/>
          <path d="m415.12 606.18c0.68122 11.477-12.384 21.671-23.463 17.082-11.092-3.8715-15.44-18.985-8.1209-28.055 5.2721-7.3861 16.728-9.6383 24.037-3.8579 4.6902 3.3999 7.7285 9.0516 7.5473 14.831z"/>
          <path d="m273.05 540.98v7.7482l13.327-0.61985 0.30993-6.5085z"/>
          <path d="m352.7 539.74-0.30993 7.4382 13.947-0.61985 0.30993-6.5085z"/>
        </g>
      </svg>
      </Link>
    </div>
  )
}

export default Intro