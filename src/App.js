import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Plotmap from './components/Plotmap'
import Loading from './components/Loading'

function App() {
  const [sidebarState, setSidebarState] = useState(null)
  const [error, setError] = useState(null)
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Loading loaded={loaded}/>
      <Sidebar sidebarState={sidebarState}/>
      <Plotmap setSidebarState={setSidebarState} setLoaded={setLoaded}/>
    </>
  )
}

export default App