import { useEffect, useState } from 'react'
import styles from './CarroItem.module.css'
import { Link } from 'react-router-dom'
import axiosINstance from '../../service/api'

export default function CarroItem({ id, modelo }) {
  const [categoriaUrl, setCateogiaUrl] = useState([
    {
      urlImagem:
        'https://sulmak.com/wp-content/uploads/2016/12/1285541001-gif-carregando-cocacolazerrooo.gif'
    }
  ])

  const getVeiculo = async () => {
    const resposta = await axiosINstance.get(`/carros/${id}`)
    setCateogiaUrl(resposta.data.categoria.urlImagem)
  }

  useEffect(() => {
    getVeiculo()
  }, [])

  return (
    <section className={styles.sectionCard}>
      <div className={styles.cardContainer}>
        <img className={styles.imgCar} src={categoriaUrl} />
      </div>
      <p className={styles.modelCar}> {modelo} </p>
      <div className={styles.yearCar}>
        <span className={styles.span}>Ano 2020/2021</span>
        <Link to={`/detail/${id}`}>
          <button className={styles.buttonCar}>Ver mais</button>
        </Link>
      </div>
    </section>
  )
}
