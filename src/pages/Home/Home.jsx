import { useEffect, useState } from 'react'

import Body from '../../Components/Body/Body'
// import SearchTemplate from "../../Components/SearchTemplate/SearchTemplate";
import Navbar from '../../Components/NavBar/Navbar'
import Footer from '../../Components/Footer/Footer'

import axiosINstance from '../../service/api'

export function Home() {
  const [carros, setCarros] = useState([])

  const getCarros = async () => {
    const res = await axiosINstance.get('/carros')
    setCarros(res.data.content)
  }

  useEffect(() => {
    getCarros()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        {/* <SearchTemplate /> */}
        <Body carros={carros} />
      </main>
      <Footer />
    </>
  )
}
