import ReservaFormulario from '../ReservaFormulario/ReservaFormulario'
import styles from './Reserva.module.css'
import { MdLocationPin, MdStarBorder } from 'react-icons/md'
// import dadosVeiculo from '../../data/contents.json'

// import { MdKeyboardArrowLeft  } from "react-icons/md";

const Reserva = ({ veiculo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.detailReserva}>
        <div className={styles.reservaTitle}>
          <h2>Detalhe da reserva</h2>
        </div>

        <div className={styles.imageContainer}>
          <img
            className={styles.imgCar}
            src={veiculo.img}
            alt="Descrição da Imagem"
          />
        </div>
        <div className={styles.produtoTitle}>
          <h3>{veiculo.category}</h3>
          <h2>{veiculo.title}</h2>
        </div>

        <div className={styles.starContainer}>
          <MdStarBorder size={14} />
          <MdStarBorder size={14} />
          <MdStarBorder size={14} />
          <MdStarBorder size={14} />
        </div>

        <div className={styles.localizacao}>
          <MdLocationPin size={14} />
          <p> {veiculo.location} </p>
        </div>

        <div className={styles.checkArea}>
          <div className={styles.check}>
            <h4 className={styles.checkIn}>Check In</h4>
            <h4>data</h4>
          </div>
          <div className={styles.check}>
            <h4 className={styles.checkOut}>Check Out</h4>
            <h4>data</h4>
          </div>
        </div>

        <div className={styles.containerButton}>
          <button className={styles.button}>Confirmar reserva</button>
        </div>
      </div>

      <ReservaFormulario />
    </div>
  )
}

export default Reserva
