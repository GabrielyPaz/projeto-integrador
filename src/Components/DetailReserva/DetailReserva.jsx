import styles from './DetailReserva.module.css'
import DatePickerComponent from '../DatePickerComponent/DatePickerComponent'
import { Link, useParams } from 'react-router-dom'
// import dadosVeiculos from '../../data/contents.json'
// import { useEffect, useState } from 'react'

const DetailReserva = () => {
  const veiculoId = useParams()

  return (
    <div className={styles.containerReserva}>
      <h1 className={styles.title}>Datas disponíveis</h1>
      <div className={styles.dateArea}>
        <div className={styles.date}>
          <DatePickerComponent />
        </div>
        <div className={styles.containerButton}>
          <p>Adicione datas a sua viagem para obter o valor exato</p>
          <Link
            to={`/detail/${veiculoId.id}/reservation`}
            className={styles.link}
          >
            Iniciar reserva
          </Link>
        </div>
      </div>
    </div>
  )
}
// /reserve

export default DetailReserva
