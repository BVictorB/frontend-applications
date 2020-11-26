import Intro from './components/Intro/Intro'
import Map from './components/Map/Map'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Intro}/>
      <Route path='/map' component={Map}/>
    </BrowserRouter>
  )
}

export default App