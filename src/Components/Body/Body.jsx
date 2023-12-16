/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import styles from './Body.module.css'
import SearchTemplate from '../SearchTemplate/SearchTemplate'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
// import dadosVeiculo from '../../data/contents.json'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SearchField from '../SearchField/SearchField'
import axiosINstance from '../../service/api'
import CarroItem from '../CarroItem/CarroItem'

function Body({ carros }) {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [slider, setSlider] = useState(null)

  //####### Trabalhando com a API ###########

  // ***** OBS: A API esta demorando um pouco para retornar os resultados *****

  const [listaCidade, setListaCidade] = useState()

  // const [veiculo, setVeiculo] = useState([])
  // const veiculoId = useParams()

  const getCidade = async () => {
    const resposta = await axiosINstance.get('/cidades')

    setListaCidade(resposta.data.cidades.nome)
    console.log(resposta.data.cidades.nome)
  }

  useEffect(() => {
    getCidade()
  }, [])

  // ########### Buscando veiculos ###########

  // const getVeiculo = async () => {
  //   const resposta = await axiosINstance.get(`/carros/${veiculoId.id}`)

  //   setVeiculo(resposta.data)
  //   console.log(resposta.data)
  // }

  // useEffect(() => {
  //   getVeiculo()
  // }, [])

  //===============================================================================
  const slidesToShow = window.innerWidth > 1010 ? 3 : 1

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow,
    slidesToScroll: 1
  }

  const goToNext = () => {
    slider && slider.slickNext()
  }

  const goToPrev = () => {
    slider && slider.slickPrev()
  }

  const handleCarouselImageSelect = index => {
    setSelectedImageIndex(index)
  }

  const handleSearch = () => {
    // const filtered = carros.filter(item => {
    //   const byCategory = filter === 'All' || item.category === filter
    //   const bySearch = item.location
    //     .toLowerCase()
    //     .includes(search.toLowerCase())
    //   return byCategory && bySearch
    // })
    // setFilteredData(filtered)
  }

  const handleFilterChange = selectedFilter => {
    setFilter(selectedFilter)
  }

  const handleSearchChange = () => {
    handleSearch()
  }

  useEffect(() => {
    handleSearch()
  }, [filter])

  return (
    <main className={styles.body}>
      <SearchTemplate
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      <div className={styles.carouselContainer}>
        <div className={styles.carouselContainerTitle}>
          <h2>Categorias</h2>
        </div>
        <Slider
          ref={s => setSlider(s)}
          {...settings}
          className={styles.carousel}
        >
          <div className={styles.carouselItem}>
            <img
              className={styles.imgCarousel}
              src="https://images.pexels.com/photos/4512259/pexels-photo-4512259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Imagem do carro"
            />
            <div className={styles.carouselText}>
              <h3 className={styles.carouselTitle}>Coupé</h3>
            </div>
          </div>
          <div className={styles.carouselItem}>
            <img
              className={styles.imgCarousel}
              src="https://images.pexels.com/photos/6649925/pexels-photo-6649925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Imagem do carro"
            />
            <div className={styles.carouselText}>
              <h3 className={styles.carouselTitle}>HATCH</h3>
            </div>
          </div>
          <div className={styles.carouselItem}>
            <img
              className={styles.imgCarousel}
              src="https://images.pexels.com/photos/261985/pexels-photo-261985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Imagem do carro"
            />
            <div className={styles.carouselText}>
              <h3 className={styles.carouselTitle}>Importado</h3>
            </div>
          </div>
          <div className={styles.carouselItem}>
            <img
              className={styles.imgCarousel}
              src="https://images.pexels.com/photos/261985/pexels-photo-261985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Imagem do carro"
            />
            <div className={styles.carouselText}>
              <h3 className={styles.carouselTitle}>SEDAN</h3>
            </div>
          </div>
        </Slider>
        <div style={{ textAlign: 'center' }}>
          <button onClick={goToPrev} className={styles.btnCarousel}>
            <FaAngleLeft
              style={{ fontSize: '2em', color: '#F0572D', cursor: 'pointer' }}
            />
          </button>
          <button onClick={goToNext} className={styles.btnCarousel}>
            <FaAngleRight
              style={{ fontSize: '2em', color: '#F0572D', cursor: 'pointer' }}
            />
          </button>
        </div>
      </div>

      <SearchField filter={filter} setFilter={setFilter} />

      <div className={styles.cardCars}>
        <div className={styles.cardForTitle}></div>

        {carros.map(item => (
          <CarroItem key={item.id} {...item} />
        ))}
      </div>
    </main>
  )
}

export default Body
