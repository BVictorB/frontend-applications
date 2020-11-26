import About from './components/About/About'
import Intro from './components/Intro/Intro'
import Map from './components/Map/Map'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Route path='/TEMP' exact component={Intro}/>
      <Route path='/' component={Map}/>
      <Route path='/about' component={About}/>
    </BrowserRouter>
  )
}

export default App