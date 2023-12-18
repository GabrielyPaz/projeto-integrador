/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from '../../Components/NavBar/Navbar'
import Footer from '../../Components/Footer/Footer'
import DetailHeader from '../../Components/DetailHeader/DetailHeader'
import DetailLocalizacao from '../../Components/DetailLocalizacao/DetailLocalizacao'
import DetailGaleria from '../../Components/DetailGaleria/DetailGaleria'
import DetailCaracteristica from '../../Components/DetailCaracteristica/DetailCaracteristica'
import DetailMapa from '../../Components/DetailMapa/DetailMapa'
import DetailInformacao from '../../Components/DetailInformacao/DetailInformacao'
import DetailReserva from '../../Components/DetailReserva/DetailReserva'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import axiosINstance from '../../service/api'

export function DetailPage() {
  const [cidade, setCidade] = useState([])
  const [categoria, setCategoria] = useState([])
  const [veiculo, setVeiculo] = useState([])
  const veiculoId = useParams()

  const getVeiculo = async () => {
    const resposta = await axiosINstance.get(`/carros/${veiculoId.id}`)
    setVeiculo(resposta.data)

  }

  const getCidade = async () => {
    const resposta = await axiosINstance.get(`/carros/${veiculoId.id}`)
    setCidade(resposta.data.cidade)

  }

  const getCategoria = async () => {
    const resposta = await axiosINstance.get(`/carros/${veiculoId.id}`)
    setCategoria(resposta.data.categoria)
  }

  useEffect(() => {
    getVeiculo()
    getCidade()
    getCategoria()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <DetailHeader veiculo={veiculo} categoria={categoria}/>
        <DetailLocalizacao veiculo={veiculo} cidade={cidade}/>
        <DetailGaleria veiculo={veiculo} />
        <DetailCaracteristica veiculo={veiculo} />
        <DetailReserva veiculo={veiculo} />
        <DetailMapa veiculo={veiculo} />
        <DetailInformacao veiculo={veiculo} />
      </main>
      <Footer />
    </>
  )
}
