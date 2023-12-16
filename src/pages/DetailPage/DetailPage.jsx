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
// import dadosVeiculo from '../../data/contents.json'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import axiosINstance from '../../service/api'
// import Body from '../../Components/Body/Body'

export function DetailPage() {
  const [cidade, setCidade] = useState([])
  const [veiculo, setVeiculo] = useState([])
  const veiculoId = useParams()

  console.log(veiculoId)

  // const getVeiculo = () => {

  //     const veiculoEncontrado = dadosVeiculo.find(item => item.id === parseInt (veiculoId.id) );
  //     setVeiculo(veiculoEncontrado);

  //     console.log(veiculoEncontrado);
  // }

  const getVeiculo = async () => {
    const resposta = await axiosINstance.get(`/carros/${veiculoId.id}`)

    setVeiculo(resposta.data.categoria.nome)
    console.log(resposta.data.categoria.urlImagem)
  }

  const getCidade = async () => {
    const resposta = await axiosINstance.get(`/cidades/${cidade.id}`)

    setCidade(resposta.data.cidade.nome)
    console.log(resposta.data.cidade.nome)
  }

  useEffect(() => {
    getVeiculo()
    getCidade()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <DetailHeader veiculo={veiculo} />
        <DetailLocalizacao veiculo={veiculo} />
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
