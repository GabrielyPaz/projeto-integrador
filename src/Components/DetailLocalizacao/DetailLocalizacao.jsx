import styles from './DetailLocalizacao.module.css'
import { MdLocationPin, MdStarBorder } from 'react-icons/md'

const DetailLocalizacao = ({ veiculo, cidade }) => {
  return (
    <div className={styles.detailLocalizacao}>
      <div className={styles.detailTitle}>
        <MdLocationPin size={20} />
        <p> {cidade.nome} - {cidade.estado}</p>
      </div>

      <div className={styles.detailClassificacao}>
        <div className={styles.detailStar}>
          <p>Muito bom</p>
          <div className={styles.starContainer}>
            <MdStarBorder size={14} />
            <MdStarBorder size={14} />
            <MdStarBorder size={14} />
            <MdStarBorder size={14} />
          </div>
        </div>
        <div className={styles.detailNota}>
          <p>8</p>
        </div>
      </div>
    </div>
  )
}

export default DetailLocalizacao
