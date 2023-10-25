import { useState } from 'react'
import './App.css'
import Navbar from './Components/NavBar/Navbar'
import Footer from './Components/Footer/Footer'
import Body from './Components/Body/Body'
import Login from './pages/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Body/>
      <Footer/>
      <Login/>
    </>
  )
}

export default App
