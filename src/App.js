import Sidebar from './components/Sidebar'
import Plotmap from './components/Plotmap'
import { useState } from 'react'

function App() {
  const [sidebarState, setSidebarState] = useState(null)
  const [error, setError] = useState(null)
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Sidebar sidebarState={sidebarState}/>
      <Plotmap setSidebarState={setSidebarState}/>
    </>
  )
}

export default App