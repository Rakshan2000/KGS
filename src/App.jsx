import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/mainnav'
import SideNav from './components/navbar/sidenav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        {/* <SideNav/> */}
      </div>
    </>
  )
}

export default App
